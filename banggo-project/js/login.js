$(".title>ul>li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	if($(this).index()==0){
		$(".user").html("用户名:");
		$(".pwd").html("登录密码:");
		$(".inner").html("请输入密码");
	}
	if($(this).index()==1){
		$(".user").html("手机号:");
		$(".pwd").html("登录密码:");
		$(".inner").html("请输入手机号");
	}
	if($(this).index()==2){
		$(".user").html("卡号:");
		$(".pwd").html("卡密码:");
		$(".inner").html("请输入卡号");
	}
})

$(".focus").focus(function(){
	$(this).next().css({"display":"block"})
}).blur(function(){
	$(this).next().css({"display":"none"})
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
	
	$(".change").click(function(){
		$.random();
	})
	
	//验证码封装函数	
	
	// 登录连接后台数据
	$("#btn").click(function(){
		  if(!$(".focus").val()){
				 alert("请填写完整信息");
			}
			
			var uname=$(".username").val();
			var upwd=$(".password").val();
			var checkcode=$(".checkcode").val();
			var check=$(".check").html();
			if(check==checkcode){
				$.ajax({
					type:"get",
					url:"http://127.0.0.1/banggo/php/login_register.php?"+`uname=${uname}&upwd=${upwd}&status=login`,
					success:function(data){
						if(data==1){
							alert("登录成功");
							location.href="index.html";
						}else if(data==2){
							alert("密码错误");
						}else if(data==0){
							alert("用户不存在")
						}
					}
				})
			}else{
				alert("验证码输入错误,请注意大小写一致");
			}
	})
	
	