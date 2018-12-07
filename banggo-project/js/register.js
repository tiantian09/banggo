    // 判断用户名的正则表达式
	var regname=/^[\u4e00-\u9fa5a-zA-Z\0-9]{4,20}$/;
    var regnum=/^\d+$/;
	var regnumb=/^[a-zA-Z_\u4e00-\u9fa5]\w+$/;
    $(".username").blur(function(){
		var uservalue=$(".username").val();
			
		if(regname.test(uservalue)){
			$(this).next().html("用户名可用")
			              .css({"color":"green"});
						  
			if(!regnumb.test(uservalue)){
		     $(this).next().html("不能用数字开头")
						   .css({"color":"red"})
			}			  	
		}else{
			$(this).next().html("用户名不合法,注意一个中文字符为2位")
						.css({"color":"red"})
		}
		
		if(uservalue==""){
			$(this).next().html("用户名不能为空")
						.css({"color":"red"})
		}
	})
	
	// 密码验证
	var regpassword=/^[a-z0-9\!\@\#\$\%\^\&\*\(\)\_]{6,20}$/;
	var regnumber=/^\d+$/;
	var regletter=/[a-z]/;
	var regSymbol = /[\!\@\#\$\%\^\&\*\(\)\_]/;
	$(".password").blur(function(){
		var pwd=$(".password").val();
		if(regpassword.test(pwd)){
			
			if(regnumber.test(pwd)){
				$(".password").next().html("您的密码等级较低")
				                     .css({"color":"red"})
			}
			if(regletter.test(pwd)){
				$(".password").next().html("您的密码等级中等")
									 .css({"color":"orange"})
			}
			if(regSymbol.test(pwd)){
				$(".password").next().html("您的密码等级非常安全")
									.css({"color":"green"})
			}
		}
	})
	
	
	  
	// 连接后台数据库   进行注册的用户名的增删改查增删改查
	
	
	
	$("#reg").click(function(){
		 var uname=$(".username").val();
		 var upwd=$(".password").val();
		 var check=$(".check").html();
		 var checkcode=$(".checkcode").val();
		if(uname=="" || upwd=="" || checkcode==""){
		  alert("请完整填写信息")	;
		}
 
		 $.ajax({
			type:"get",
			url:"http://127.0.0.1/banggo/php/login_register.php?"+`uname=${uname}&upwd=${upwd}&status=reg`,
			dataType:"json",
			success:function(data){
				if(data==1){
					alert("注册成功");
					location.href="login.html";
				}
				
 		  }
 	  });
		
		
		
		
	}) 



// 验证码封装函数
$.extend({
	random:function(){
		var str="abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var arr=str.split("");		
		var constr="";
		for(var i=0;i<4;i++){
			var num=parseInt(Math.random()*61);	
		    constr+=arr[num];
		}
		return constr;
	}
})
  $.random();
	$(".check").html($.random());