var renderHtml=require('./utils/login.util.js');

$(function(){
	renderHtml.renderHtml();
	//注册
	$(".register").on("click",function(){
		$(this).css({
			"background":"orange",
			"color":"white"
		});
		$(".logoin").css({
			"background":"white",
			'color':"#333"
		});
		$(".logoPart").css("display","none");
		$(".registerPart").css("display","block");
	});
	$(".logoin").on("click",function(){
		$(this).css({
			"background":"orange",
			'color':"white"
		});
		$(".register").css({
			"background":"white",
			'color':"#333"
		});
		$(".logoPart").css("display","block");
		$(".registerPart").css("display","none");
	});
	
	//注册部分的js
	//验证手机号码是否正确
	$(".tel").blur(function(){
		var tel=$(".tel").val();
		if (Number(tel)&&tel.length==11) {
			$(".confirmTelMsg").text("格式正确");
			
			//验证用户名是否可以使用
			var xhr;
			if (window.XMLHttpRequest) {
				xhr=new XMLHttpRequest();
			}else{
				xhr=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhr.onreadystatechange=function(){
				if (xhr.readyState==4) {
					if (xhr.status==200) {
						if (xhr.responseText==-1) {
							$(".confirmTelMsg").text("此用户名可以使用");
						}else{
							$(".confirmTelMsg").text("此用户名已经存在")
						}
					}else{
						alert("数据库连接失败");
					}
				}
			}
			xhr.open("GET", "http://localhost:8080/user/CheckUserNameGet?username="+tel, true);
			xhr.send();
		}else{
			$(".confirmTelMsg").text("用户名非法");	
		}
	});
	
	//验证两次的密码是否一致
	$(".confirmPwdBox .confirmPwd").change(function(){
		var pwd=$(".setPwdBox .setPwd").val();
		var confirmPwd=$(".confirmPwdBox .confirmPwd").val();
		if (pwd!=confirmPwd) {
			$(".logo .logoForm .confirmPwdBox .confirmMsg").text("密码不一致!");
		}else{
			$(".logo .logoForm .confirmPwdBox .confirmMsg").text("密码一致!");
		}
	});
	$(".setPwdBox .setPwd").blur(function(){
		var pwd=$(".setPwdBox .setPwd").val();
		var confirmPwd=$(".confirmPwdBox .confirmPwd").val();
		if (pwd!=confirmPwd) {
			$(".logo .logoForm .confirmPwdBox .confirmMsg").text("密码不一致!");
		}else{
			$(".logo .logoForm .confirmPwdBox .confirmMsg").text("密码一致!");
		}
	});
	//点击注册按钮的验证
	$(".registerPart .registerNow").click(function(){
		if ($(".registerPart >input").attr("checked")=="checked") {
			var tel=$(".telBox .tel").val();
			var pwd=$(".setPwdBox .setPwd").val();
			
			//启动ajax到后台注册
			var xhr;
			if (window.XMLHttpRequest) {
				xhr=new XMLHttpRequest();
			}else{
				xhr=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhr.onreadystatechange=function(){
				if (xhr.readyState==4) {
					if (xhr.status==200) {
						if(xhr.responseText==1){
							alert("注册成功，快去登吧");
						}
					}else{
						alert("数据库连接失败");
					}
				}
			}
			xhr.open("GET", "http://localhost:8080/user/registerGet?name="+tel+"&password="+pwd, true);
			xhr.send();
			
		}else{
			alert("请您勾选注册协议");
		}
	});
	
	//登录部分
	//验证用户名是否存在
	$(".nameBox .name").blur(function(){
			var tel=$(".nameBox .name").val();
			var xhr;
			if (window.XMLHttpRequest) {
				xhr=new XMLHttpRequest();
			}else{
				xhr=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhr.onreadystatechange=function(){
				if (xhr.readyState==4) {
					if (xhr.status==200) {
						if (xhr.responseText==1) {
							$(".nameMsg").text("");
						}else{
							$(".nameMsg").text("此用户名不存在");
						}
					}else{
						alert("数据库连接失败");
					}
				}
			}
			xhr.open("GET", "http://localhost:8080/user/CheckUserNameGet?username="+tel, true);
			xhr.send();
	});
	
	//登录
	$(".vipLogo").click(function(){
		var tel=$(".nameBox .name").val();
		var pwd=$(".pwdBox .pwd").val();
		var xhr;
			if (window.XMLHttpRequest) {
				xhr=new XMLHttpRequest();
			}else{
				xhr=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhr.onreadystatechange=function(){
				if (xhr.readyState==4) {
					if (xhr.status==200) {
						if (xhr.responseText==1) {
							window.location.href="../index.html";
						}else{
							alert("登录失败")
						}
					}else{
						alert("数据库连接失败");
					}
				}
			}
			xhr.open("GET", "http://localhost:8080/user/loginget?name="+ tel + "&password=" + pwd, true);
			xhr.send();
	});
});
























































































