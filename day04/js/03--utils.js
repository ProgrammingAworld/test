$(function(){
	//添加或查询部分
	$("#submit").on("click",function(){
		var name=$("#name").val();
		var value=$("#value").val();
//		if (JSON.stringify(value)) {
//			value=JSON.stringify(value);
//		}
		if ($("#session").is(":checked")) {
			setAndGetSession(name,value);
		}else{
			setAndGet(name,value);
		}
	});
	
	//local的方法
	function setAndGet(name,value){
		if (name==""||name==null) {
			alert("请输入key的值")
		}else if (value==""||value==null) {
			getLocalstorage(name);
		}else{
			setLocalstorage(name,value);
		}
	}
	
	function getLocalstorage(name){
		 if (JSON.parse(localStorage.getItem(name))) {
			var obj=JSON.parse(localStorage.getItem(name));
			$(".show").text(getJsonData(obj));
		} 
		else{
			$(".show").text(localStorage.getItem(name));
		}
	}
	function setLocalstorage(name,value){
		localStorage.setItem(name,value);
	}
	//session部分
	function setAndGetSession(name,value){
		if (name==""||name==null) {
			alert("请输入key的值")
		}else if (value==""||value==null) {
			getSession(name);
		}else{
			setSession(name,value);
		}
	}
	function getSession(name){
		if (JSON.parse(sessionStorage.getItem(name))) {
			var obj=JSON.parse(sessionStorage.getItem(name));
			$(".show").text(getJsonData(obj));
		}else{
			$(".show").text(sessionStorage.getItem(name));
		}
	}
	function setSession(name,value){
		sessionStorage.setItem(name,value);
	}
	
	
	//移除部分
	$("#remove").on("click",function(){
		var name=$("#name").val();
		if ($("#session").is(":checked")) {
			removeSession(name);
		}else{
			removeLocal(name);
		}
	});
	function removeSession(name){
		if (name==""||name==null) {
			alert("请输入要移除的key");
		}else{
			sessionStorage.removeItem(name);
		}
	}
	function removeLocal(name){
		if (name==""||name==null) {
			alert("请输入要移除的key");
		}else{
			localStorage.removeItem(name);
		}
	}
	//清除所有的缓存
	$("#clear").on("click",function(){
		if ($("#session").is(":checked")) {
			sessionStorage.clear();
		}else{
			localStorage.clear();
		}
	});
	
	//遍历json对象
	function getJsonData(obj){
		var str="";
		for(var i in obj){
			str=str+obj[i]+" ";
		}
		return str;
	}
});













































