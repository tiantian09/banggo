// 导航栏里的移入移出效果封装了一个jquery函数
  $.fn.extend({
	  fnenter:function(obj){
		  this.mouseenter(function(){
			  this.find(obj).css({"display":"block"})
		  }.bind(this)).mouseleave(function(){
			  this.find(obj).css({"display":"none"})
		  }.bind(this))
	  }
  })
  
  $(".mine_banggo").fnenter("ul");
  $(".download").fnenter(".img");
  $(".weixin").fnenter("img")
	$(".login>a").fnenter(".ul")



//搜索框的
$(".input").click(function(){
	$(this).find("p").css({"display":"none"})
})


// 轮播图
var timer=null;
   index=0;
  timer=setInterval(autoplay,3000);

function autoplay(){
   index++;
  if(index==$(".banner li").size()){
	  index=0;
  }
	$(".banner li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	$(".index li").eq(index).addClass("line")
	                        .siblings().removeClass("line");	
}

$(".index li").mouseenter(function(){
		clearInterval(timer);

		index=$(this).index()-1;
		console.log(index)

		autoplay();
	}).mouseleave(function(){
		timer=setInterval(autoplay,3000);
	})
  
   // 为主页中的json封装了一个函数,需要时候可调用
 $.extend({
	 data:function(url,obj){
		 $.ajax({
		 type:"get",
		 url:url,
		 success:function(msg){
		 	var str1="";
		 	for(var i=0;i<msg.length;i++){
		 		str1+=`
				 <li style="position:relative">
				<a href="detail.html?id=${msg[i].id}">
		 			<img src="img/${msg[i].src}"/>
					</a>
		 			<div class="bottom_title">
		 				<span>${msg[i].title}</span>
		 				<p>${msg[i].discount}</p>
		 				<a title="${msg[i].word}">${msg[i].word}</a>
						 <em class="cover" data-id="${msg[i].id}" data-src="${msg[i].src}" data-price="${msg[i].price}" data-word="${msg[i].word}" data-title="${msg[i].title}">加入购物车</em>
		 			</div>
		 			<div class="price">
		 				<b>${msg[i].price}</b>
		 				<i>${msg[i].old_price}</i>
		 			</div>
		 		</li>`;
		 	}
		 	$(obj).html(str1);
		   }
		 })
	 }
 })
 
 
 //封装函数   移入出现加入购物车样式 
 $.fn.extend({
	 mouseent:function(){
		this.on("mouseenter","li",function(){
		 $(this).find($(".cover")).css({"display":"block"})
		 }).on("mouseleave","li",function(){
		 $(this).find($(".cover")).css({"display":"none"})
		 })
	 }
 })
 
 // 热卖产品
 $.data("json/sell.json",$(".list"))
   $(".list").mouseent();
 //男装
 $.data("json/man.json",$(".list1"))
   $(".list1").mouseent();
 

 // 女装
 $.data("json/woman.json",$(".list_woman"))
  $(".list_woman").mouseent();
 // 儿童
 $.data("json/children.json",$(".children_list"))
  $(".children_list").mouseent();
 
 // 鞋包
 $.data("json/shoes.json",$(".bag_list"))
    $(".bag_list").mouseent();
 // 尝试封装函数
 $.fn.extend({
	 car:function(){
		 this.on("click","em",function(){
			 var json={};  //存储当前商品的信息
			 			var arr=[];   //存储所有的商品的信息
			 		  var flag=true;
			 			console.log(this);
			 			var startobj=$(this);
			 			var endobj=$(".shoping");
			 			var src=$(this).attr("src");
			 			$.fnstart(startobj,endobj).fnMove($(this).attr("data-src"));
			 			//将商品的信息存放到json当中
			 			json={
			 				"id": $(this).attr("data-id"),
			 				"src":$(this).attr("data-src"),
			 				"price":$(this).attr("data-price"),
							"word":$(this).attr("data-word"),
							"title":$(this).attr("data-title"),
			 				"count":1
			 			}	

			 		if(localStorage.data){
			     var brr= JSON.parse( localStorage.data );
			 	   if(brr.length!=0){
			 		   arr=brr;
			 			for(var i=0;i<arr.length;i++){
			 			   if(json.id==arr[i].id){
			 				   arr[i].count++;
			 				   flag=false;  //开关为false
			 				   break;    //跳出
			 			   }
			 		   }
			 	   }
			 	 }	
			 			 
			   if(flag){
			 		//设置开关,当flag的值为真时,才将数据向数组中添加
			 		arr.push(json);
			 	}
			 		 		   
			 	localStorage.data=JSON.stringify(arr);	
			  })
			  
			  //定义函数用来获取商品总数量
			  //将每一个商品count值累加
			  getCount();
			  
			  function getCount(){
			  	count=0;
			 	if(localStorage.data){
			 		var brr=JSON.parse(localStorage.data);
			  	if(brr.length!=0){
			  		for(var i=0;i<brr.length;i++){
			  			count+=brr[i].count;
			  		}
			  	}
			  	$(".count").html(count);
			 	   }
		 }
	 }
 })
 
 
 	function getCount(){
 		count=0;
 	if(localStorage.data){
 		var brr=JSON.parse(localStorage.data);
 		if(brr.length!=0){
 			for(var i=0;i<brr.length;i++){
 				count+=brr[i].count;
 			}
 		}
 		$(".count").html(count);
 			}
 }
 $(".list").car();
 $(".list1").car();
 $(".children_list").car();
 $(".list_woman").car();
 $(".bag_list").car();

 //编写插件  实现抛物线功能
 $.extend({
 	fnstart:function(startobj,endobj){
 		//起始点
 		this.startPoint={
 			x:startobj.offset().left+startobj.width()/2,
 			y:startobj.offset().top,
 		}
 		//结束点
 		this.endPoint={
 			x:endobj.offset().left+endobj.width()/2,
 			y:endobj.offset().top,
 		}
 		//最高点
 		this.topPoint={
 			x:this.endPoint.x-100,
 			y:this.endPoint.y-50,
 		}
 			console.log(this.startPoint.x,this.startPoint.y)
 			console.log(this.endPoint.x,this.endPoint.y)
 	//确定抛物线系数
 this.a = ((this.startPoint.y - this.endPoint.y) * (this.startPoint.x - this.topPoint.x) - (this.startPoint.y - this.topPoint.y) * (this.startPoint.x - this.endPoint.x)) / ((this.startPoint.x * this.startPoint.x - this.endPoint.x * this.endPoint.x) * (this.startPoint.x - this.topPoint.x)-(this.startPoint.x * this.startPoint.x - this.topPoint.x * this.topPoint.x) * (this.startPoint.x - this.endPoint.x));  
 						
 	this.b = ((this.endPoint.y - this.startPoint.y) - this.a * (this.endPoint.x * this.endPoint.x - this.startPoint.x * this.startPoint.x)) / (this.endPoint.x - this.startPoint.x);  
 						
 	this.c = this.startPoint.y - this.a * this.startPoint.x * this.startPoint.x - this.b * this.startPoint.x;
 	
 	return this;
 },
 	fnMove:function(src){
 		var $img=$("<img>");
 		$img.attr("src","img/"+src);
		
 		$img.appendTo($("body"));
 		
 		var x=this.startPoint.x;
 		var y=this.startPoint.y;
 		
 		$img.css({
 			width:30,
 			height:30,
 			position:"absolute",
 			left:x,
 			top:y,
 		})
 		
 		var timer=setInterval(function(){
 			x=x+10;
 			y=this.a*x*x+this.b*x+this.c;
 			
 			if(x<this.endPoint.x){
 				$img.css({
 					left:x,
 					top:y
 				})
 			}else{
 				clearInterval(timer);
 				$img.remove();
 				getCount();
 			   }
 		  }.bind(this),20)
 		}
 })
 
 $(".shoping").click(function(){
	 location.href="shopcar.html";
 })