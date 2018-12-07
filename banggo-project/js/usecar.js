 // var btn=$(".cover");
 // 点击购物车事件  //$(".list1")

// 		$(".list1").on("click","em",function(){
// 	    var json={};  //存储当前商品的信息
// 			var arr=[];   //存储所有的商品的信息
// 		  var flag=true;
// 			
// 			var startobj=$(this);
// 			var endobj=$(".shoping");
// 			var src=$(this).attr("src");
// 			$.fnstart(startobj,endobj).fnMove($(this).attr("data-src"));
// 			//将商品的信息存放到json当中
// 			json={
// 				"id": $(this).attr("data-id"),
// 				"src":$(this).attr("data-src"),
// 				"price":$(this).attr("data-price"),
// 				"count":1
// 			}	
// 			
// 
// 		if(localStorage.data){
//     var brr= JSON.parse( localStorage.data );
// 	   if(brr.length!=0){
// 		   arr=brr;
// 			for(var i=0;i<arr.length;i++){
// 			   if(json.id==arr[i].id){
// 				   arr[i].count++;
// 				   flag=false;  //开关为false
// 				   break;    //跳出
// 			   }
// 		   }
// 	   }
// 	 }	
// 			 
//   if(flag){
// 		//设置开关,当flag的值为真时,才将数据向数组中添加
// 		arr.push(json);
// 	}
// 		 		   
// 	localStorage.data=JSON.stringify(arr);	
//  })
//  
//  //定义函数用来获取商品总数量
//  //将每一个商品count值累加
//  getCount();
//  
//  function getCount(){
//  	count=0;
// 	if(localStorage.data){
// 		var brr=JSON.parse(localStorage.data);
//  	if(brr.length!=0){
//  		for(var i=0;i<brr.length;i++){
//  			count+=brr[i].count;
//  		}
//  	}
//  	$(".count").html(count);
// 	   }
//  } 