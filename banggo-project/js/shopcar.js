window.onload=function(){

	if(localStorage.data){
	var data=JSON.parse(localStorage.data);
	
	var str="";
	for(var i=0;i<data.length;i++){
		// console.log( data[i].count )
		// console.log(data[i].price.slice(1,6)  )
		str+= '<ul>'+
		       '<input type="checkbox" class="choose"/>'+
		       '<li><dl><dt><img src="img/'+data[i].src+'"></dt><dd>'+data[i].word+'</dd><dd>'+data[i].title+'</dd><br><dd>该商品支持14天退货</dd></dl></li>'+
		       '<li>'+data[i].price+'</li>'+
		      ' <li data-count="'+data[i].count+'"><div data-id="'+data[i].id+'"><a class="m" number="-1">-</a><span class="shu">'+data[i].count+'</span><a class="m" number="1">+</a></div></li>'+
		      ' <li class="mon">'+((data[i].price.slice(1,6))*(data[i].count))+'</li>'+
		       '<li data-id="'+data[i].id+'" class="delete">删除</li>'+
		      ' </ul> ';

	}
	$(".product").html(str);
 }

        // 数据累加
   $(".m").click(function(){
	   var id=$(this).parent().attr("data-id");

	   var count=$(this).next().html();
	   var count1=$(this).parent().parent().attr("data-count");
	   var num=$(this).html();
	   
           if(num=="-" && count==1){
			   return ;
		   }
			
	   for(var i=0;i<data.length;i++){

		   if(id==data[i].id){
			   console.log($(this).attr("number"))
			   data[i].count+=Number($(this).attr("number"));
			   localStorage.data=JSON.stringify(data);
			   $(this).next().html(data[i].count);

			   $(this).parent().parent().next().html(data[i].count*data[i].price.slice(1,6)+"元");
              
		   }
	   }
	   
   })
   
   
     jiesuan();
	 
	 $(".all").click(function(){
	 	   $(".choose").prop("checked",$(this).prop("checked"));
	 	   jiesuan();
	    })
	    
	  $(".choose").click(function(){
	  	jiesuan();
	  })    
   

     function jiesuan(){
     	var count=0;
     	var money=0;
     	//遍历被选中的复选框
     	$(".choose:checked").each(function(){
      count+=parseInt($(this).parent().find(".shu").html()) ;
     
     money+=parseInt( $(this).parent().find(".mon").html());
     		console.log(count)
     	})
     	$(".count").html(count);
     	$(".money").html(money);
     }




  $(".delete").click(function(){
	  var id=$(this).attr("data-id");
	  for(var i=0;i<data.length;i++){
	  	if(id==data[i].id){
			// 删除数组中的数据
			data.splice(i,1);
			localStorage.data=JSON.stringify(data);
			$(this).parent().remove();
		}
	  }
  })

    


	
}