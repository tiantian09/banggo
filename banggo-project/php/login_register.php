<?php
		header("content-type:text/html;charset=utf-8");
		header("Access-Control-Allow-Origin:*");
     	$project = mysql_connect("localhost","root","root");
     	mysql_select_db( "project" , $project );
     	mysql_query("set names utf8");
		
		$uname = $_GET["uname"];//接收用户名
		$upwd  = $_GET["upwd"];//接收密码
		$status=$_GET["status"];
		
		
		if($status=="reg"){
		$sql = "insert into users(uname,upwd) values('$uname','$upwd')";
        $row = mysql_query( $sql );
        if( $row ){
        	echo 1;//注册成功
			
        }else{
        	echo 0;//注册失败
        }	
	}else if($status=="login"){
		$sql = "select * from users where uname='$uname'";
         
		$res = mysql_query( $sql );
		$arr = mysql_fetch_array( $res );
		if($arr){
			if($upwd==$arr["upwd"]){
				echo 1;//登录成功
			}else{
				echo 2;//密码错误
			}
		}else{
			echo 0;//用户名不存在
		}	
	}
 		






?>