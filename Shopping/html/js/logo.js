$(function(){
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
			$(".confirmTelMsg").text("此用户名可以使用");
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
			
			//启动ajax
			var xhr;
			if (window.XMLHttpRequest) {
				xhr=new XMLHttpRequest();
			}else{
				xhr=new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhr.onreadystatechange=function(){
				if (xhr.readyState==4) {
					if (xhr.status==200) {
						alert(xhr.responseText);
					}else{
						alert("数据库连接失败");
					}
				}
			}
			xhr.open("GET", "http://localhost/user/CheckUserName/username="+tel+"&callback=fn", true);
			xhr.send();
			
		}else{
			alert("请您勾选注册协议");
		}
	});
});
























































































