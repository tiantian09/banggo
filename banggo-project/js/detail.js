$(".rule").mouseenter(function(){
	$(".huiyuan").css({"display":"block"})
}).mouseleave(function(){
	$(".huiyuan").css({"display":"none"})
})

var href=location.href;

  var id=href.split("=")[1];



$.ajax({
	type:"get",
	url:"json/total.json?"+Math.random(),
	async:true,
	success:function(msg){
		var str="";   //右边顶部标题
		var str1="";  //左边大图
		var str2="";   //左边下面小图
	  var str3="";   //价格拼接
		var button="";
		var str4="";
		for(var i=0;i<msg.length;i++){
			if(id==msg[i].id){
				str+=`<a href="#">${msg[i].title}${msg[i].word}</a>`;
				str1+=`
						   <li>
							 <img src="img/${msg[i].srcb}">
							  <div id="mask"></div>
							 </li>
						   <li><img src="img/${msg[i].srcb2}"></li>
						   <li><img src="img/${msg[i].srcb3}"></li>
						   <li><img src="img/${msg[i].srcb4}"></li>
						   <li><img src="img/${msg[i].srcb5}"></li>`;
					         
       
				str2+=`
				        		<li class="active">
										    <img src="img/${msg[i].srcs1}">
										</li>
				        <li><img src="img/${msg[i].srcs2}"></li>
				        <li><img src="img/${msg[i].srcs3}"></li>
				        <li><img src="img/${msg[i].srcs4}"></li>
				        <li><img src="img/${msg[i].srcs5}"></li>`;
								
				str3+=`
				      <span>售价:</span><h3>${msg[i].price}</h3>
						  <span>吊牌价:</span><i>${msg[i].old_price}</i>
							<em>${msg[i].discount}</em>`; 
					str4+=`
					<li>
					  <img src="img/${msg[i].srcb}" class="bigimg">
					</li>`; 
			}

		}
		$(".right_title").html(str);
		$(".middle").html(str1);
		$(".small").html(str2);
		$(".price_one").html(str3);
		$(".big").html(str4);
	}	
})



// 左边上面大图与下面小图的选项卡之类的操作
     $(".small").on("click","li",function(){
	 $(this).addClass("active").siblings().removeClass("active");
			 var index=$(this).index();
		$(".middle li").eq(index).show().siblings().hide();
			 console.log(index)
		 })

   var oA=$(".photo_size>a");
	 var oA2=$(".photo_color>a");
	 // console.log(oA)
	 oA.click(function(){
		 $(this).addClass("active")
		                .siblings().removeClass("active");
	 })
   oA2.click(function(){
   	$(this).addClass("active")
   								.siblings().removeClass("active");
   })
	 
	 // 点击右上角叉号关闭提示页面  
     $(".close").click(function(){
     		 $(".tishi").css({"display":"none"})
     	 })
// 购物车

   $(".shopcar").click(function(){
		 if(!(oA.attr("class")||oA2.attr("class"))){
			   alert("请选择颜色或者尺码");
		 }else{
			 $(".tishi").css({"display":"block"});
			 var json={};
			 var arr=[];
			 
		 } 
	 })
   

    function bigmirr(){}
		  
			
			
			//鼠标移入到左侧小图时，显示对应的中图和大图
	$(".middle").on({
		"mouseenter":function(){
			$("#mask").show();
			$(".big").show();
		},
		"mouseleave":function(){
			$("#mask").hide();
			$(".big").hide();
		},
		"mousemove":function(e){
			var e= e||event;
			var x = e.pageX - $(".middle").offset().left - $("#mask").width()/2;
			var y = e.pageY - $(".middle").offset().top - $("#mask").height()/2;
			
			var maxL = $(".middle").width() - $("#mask").width() ;
			var maxT = $(".middle").width() - $("#mask").width() ;
			
			//边界处理
			x = x <= 0 ? 0 : ( x >= maxL ? maxL : x );
			y = y <= 0 ? 0 : ( y >= maxT ? maxT : y );
			
			var bigImageX = -x * $(".bigimg").width() / $(".middle").width();
			var bigImageY = -y * $(".bigimg").height() / $(".middle").height();
			
			// console.log(bigImageX)
			// 遮罩位置
			$("#mask").css({
				left:x + "px",
				top:y + "px",
				"background-position-x":-x+"px",
				"background-position-y":-y+"px"
			});
			
			// console.log(bigImageX,bigImageY)
			//设置大图移动的距离left 和 top  方向和mask相反
			$(".bigimg").css({
				left:bigImageX + "px",
				top:bigImageY + "px"
			});
		}
	})
		
