//获取url中的数据信息
var id;
function UrlSearch() {
		var name, value;
		var str = location.href; //取得地址栏的url
		var num = str.indexOf("?"); //？ 的位置
		str = str.substr(num + 1); //取得所有参数  获取？后面的url内容。
		var arr=str.split("=");
		id=arr[1];
	}
UrlSearch();
//启动ajax获取数据
	var ajaxUrl = "http://localhost:8080/product/GetProductById_get?id="+id;
		$.ajax({
			url: ajaxUrl,
			success: function(result) {
				var dataObj = JSON.parse(result.Data);
				var reckonStr=dataObj.reckon.split("-");
				//设置图片地址
				$(".picNav ul >li:eq(0) img").attr({
					"src":"img/"+dataObj.id+".jpg"
				});
				$(".goodsPicBox .goodsPic >img").attr({
					"src":"img/"+dataObj.id+".jpg"
				});
				$(".bigOriginal >img").attr({
					"src":"img/"+dataObj.id+".jpg"
				});
				//填充商品数据信息
				var reckonStr=dataObj.reckon.split("-");
				/*var reckon1=reckonStr[0].split(",");
				var reckon3=reckonStr[1].split(",");
				reckon1[1]=Number(reckon1[1])+200;
				reckon3[1]=Number(reckon3[1])+200;
				reckon1=reckon1[0]+reckon1[1];
				var reckon2=reckon3[0]+(Number(reckon3[1])-200);
				reckon3=reckon3[0]+reckon3[1];*/
				$(".desc").text(dataObj.goodName);
				$(".saleTime >span").text(dataObj.saleTime);
				$(".address >span").text(dataObj.address);
				$(".price span:eq(0)").text(dataObj.price);
				$(".price span:eq(1)").text(dataObj.reckon);
				$(".priceMark ul>li:eq(1)").text(reckonStr[0]);
				$(".priceMark ul>li:eq(2)").text(reckonStr[0]);
				$(".priceMark ul>li:eq(3)").text(reckonStr[1]);
				//宝贝描述
				$(".chinese .Part1 p:eq(0)").text(dataObj.chineseDesc);
				$(".english p:eq(0)").text(dataObj.englishDesc);
				//宝贝图片展示
				$(".display ul >li >img").attr("src","img/"+dataObj.id+".jpg");
			},
			error: function() {
				alert("获取页面失败");
			},
			dataType: "json"
		});
		
		//导航的信息
		function getGroup(){
			id=Number(id);
			if (1<=id&&id<=16) {
				$(".location span:eq(1)").html("拍卖会&gt;");
				$(".location span:eq(2)").html("拍卖会详情&gt;");
			}if (17<=id&&id<=28) {
				$(".location span:eq(1)").html("艺术品&gt;");
				$(".location span:eq(2)").html("艺术品详情&gt;");
			}if (29<=id&&id<=35) {
				$(".location span:eq(1)").html("珠宝&gt;");
				$(".location span:eq(2)").html("珠宝详情&gt;");
			}
			if (36<=id&&id<=47) {
				$(".location span:eq(1)").html("老爷车&gt;");
				$(".location span:eq(2)").html("老爷车详情&gt;");
			}
			if (48<=id&&id<=52) {
				$(".location span:eq(1)").html("闪购&gt;");
				$(".location span:eq(2)").html("闪购详情&gt;");
			}if (id>52){
				$(".location span:eq(1)").html("猜你喜欢&gt;");
				$(".location span:eq(2)").html("猜你喜欢详情&gt;");
			}
		}
		
		//获取猜你喜欢部分的数据信息
		//读取ajax数据
	function getData(count, group) {
		var ajaxUrl = "http://localhost:8080/product/GetProductsByPage_get?pagesize=62&pageindex=1";
		$.ajax({
			url: ajaxUrl,
			success: function(result) {
				for(var i = 0; i < result.length; i++) {
					//把result中的string转换成对象
					var dataObj = JSON.parse(result[i].Data);
					if (group==6) {
						if(dataObj.group == 6) {
							var str ="<li class='information'><img src=img/"+dataObj.id+".jpg /><p>"+dataObj.goodName+"</p><p>起拍价<span>"+dataObj.price+"</span></p></li>";
							$(".likeBanner ul").append(str);
						}
					}
				}
			},
			error: function() {
				alert("获取页面失败");
			},
			dataType: "json"
		});
	}

	//调用此函数获取拍卖会的数据
	getData(10, 6);
		
		
		
		
		
		
$(function(){
	getGroup();
	//合计金额的计算
	$(".myPrice >input").on("input propertychange",function(){
		var val=Number($(this).val());
		val1=Math.round(val*0.3*10)/10;
		val11=Math.round(val1*8.8193*100)/100;
		val2=Math.round(val*0.1*10)/10;
		val22=Math.round(val2*8.8193*100)/100;
		//val=Math.round(val*1.4*8.8193*100)/100;
		$(".mark >div p:eq(0) span").text("€"+val1+"(约￥"+val11+")");
		$(".mark >div p:eq(1) span").text("€"+val2+"(约￥"+val22+")");
		$(".money >span").text("€"+Math.round(val*1.4*10)/10+"(约￥"+Math.round(val*1.4*8.8193*100)/100+")");
	});
	
	//出价规则效果
	$(".myPrice i").children("img").slideUp(10);
	$(".myPrice i").children("span").slideUp(10);
	$(".myPrice i").click(function(){
		$(this).children("img").slideToggle(200);
		$(this).children("span").slideToggle(150);
	})
	
	/*---------------跳转到首页----------------*/
	$(".skipTo").click(function(){
		window.location.href="index.html";
	});
	/*--------------翻译按钮以及下边的切换部分----------------*/
	$(".transform").click(function(){
		if ($(this).text()=="翻译") {
			$(this).text("已翻译");
			$(".english").css("display","none");
			$(".chinese .Part1").css("display","block");
			$(".chinese .Part2").css("display","none");
			$(".chinese .Part3").css("display","none");
			$(".chinese .Part4").css("display","none");
		}else{
			$(this).text("翻译");
			$(".english").css("display","block");
			$(".chinese .Part1").css("display","none");
			$(".chinese .Part2").css("display","none");
			$(".chinese .Part3").css("display","none");
			$(".chinese .Part4").css("display","none");
		}
	});
	$(".detail ul li:eq(0)").click(function(){
		if ($(".transform").text()=="已翻译") {
		$(".detail ul li:eq(0)").css({"background":"#463B7F","color":"white"});
			$(".detail ul li:eq(1)").css({"background":"none","color":"#333"});
			$(".detail ul li:eq(2)").css({"background":"none","color":"#333"});
			$(".detail ul li:eq(3)").css({"background":"none","color":"#333"});
			$(".english").css("display","none");
			$(".chinese .Part1").css("display","block");
			$(".chinese .Part2").css("display","none");
			$(".chinese .Part3").css("display","none");
			$(".chinese .Part4").css("display","none");
		}
		if ($(".transform").text()=="翻译") {
		$(".detail ul li:eq(0)").css({"background":"#463B7F","color":"white"});
			$(".detail ul li:eq(1)").css({"background":"none","color":"#333"});
			$(".detail ul li:eq(2)").css({"background":"none","color":"#333"});
			$(".detail ul li:eq(3)").css({"background":"none","color":"#333"});
			$(".english").css("display","block");
			$(".chinese .Part1").css("display","none");
			$(".chinese .Part2").css("display","none");
			$(".chinese .Part3").css("display","none");
			$(".chinese .Part4").css("display","none");
		}
	});
	$(".detail ul li:eq(1)").click(function(){
		$(this).css({"background":"#463B7F","color":"white"});
		$(".detail ul li:eq(0)").css({"background":"none","color":"#333"});
		$(".detail ul li:eq(2)").css({"background":"none","color":"#333"});
		$(".detail ul li:eq(3)").css({"background":"none","color":"#333"});
		$(".chinese .Part1").css("display","none");
		$(".chinese .Part2").css("display","block");
		$(".chinese .Part3").css("display","none");
		$(".chinese .Part4").css("display","none");
		$(".english").css("display","none");
	});
	$(".detail ul li:eq(2)").click(function(){
		$(this).css({"background":"#463B7F","color":"white"});
		$(".detail ul li:eq(0)").css({"background":"none","color":"#333"});
		$(".detail ul li:eq(1)").css({"background":"none","color":"#333"});
		$(".detail ul li:eq(3)").css({"background":"none","color":"#333"});
		$(".chinese .Part1").css("display","none");
		$(".chinese .Part2").css("display","none");
		$(".chinese .Part3").css("display","block");
		$(".chinese .Part4").css("display","none");
		$(".english").css("display","none");
	});
	$(".detail ul li:eq(3)").click(function(){
		$(this).css({"background":"#463B7F","color":"white"});
		$(".detail ul li:eq(0)").css({"background":"none","color":"#333"});
		$(".detail ul li:eq(1)").css({"background":"none","color":"#333"});
		$(".detail ul li:eq(2)").css({"background":"none","color":"#333"});
		$(".chinese .Part1").css("display","none");
		$(".chinese .Part2").css("display","none");
		$(".chinese .Part3").css("display","none");
		$(".chinese .Part4").css("display","block");
		$(".english").css("display","none");
	});
	/*---------------span的划过淡出图片的效果-----------------*/
	$(".slideMark").mouseenter(function(){
		$(".slidePic").slideDown(200);
	});
	$(".slideMark").mouseleave(function(){
		$(".slidePic").slideUp(200);
	});
	$(".myPrice input").mouseenter(function(){
		$(".priceMark").slideDown(200);
	});
	$(".myPrice input").mouseleave(function(){
		$(".priceMark").slideUp(200);
	});
	/*--------------图片展示的点击按钮滑动图片部分------------*/
	$(".showGoods .leftBtn").click(function(){
		console.log($(".showGoods ul").top);
		$(".showGoods ul").animate({
			"top":"-=90px"
		},200);
	});
	$(".showGoods .rightBtn").click(function(){
		$(".showGoods ul").animate({
			"top":"+=90px"
		},200);
	});
	/*-----------------like的banner图部分-----------------*/
	$(".like .leftBtn").click(function(){
		var oldLeft=$(".like ul").css("left");
		oldLeft=parseFloat(oldLeft);
		if (oldLeft>-1200) {
			$(".like ul").animate({
			"left":"-=240px",
			},500);
		}
	});
	
	$(".like .rightBtn").click(function(){
		var oldLeft=$(".like ul").css("left");
		oldLeft=parseFloat(oldLeft);
		if(oldLeft<0){
			$(".like ul").animate({
			"left":"+=240px",
			},500);
		}
	});
	/*-------------放大镜效果-----------*/
	$(".original").mousemove(function(e){
			var evt = e || window.event
			$(".bigOriginal").css({
				'display':'block',
				"background":"#ccc"
				})
			var ot = evt.clientY-($(".original").offset().top- $(document).scrollTop())-87;
			var ol = evt.clientX-($(".original").offset().left- $(document).scrollLeft())-87;
			if(ol<=0){
				ol = 0;
			}
			if(ot<=0){
				ot = 0;
			}
			if(ol>=175){
				ol=175
			}
			if(ot>=175){
				ot=175
			}
			var ott = ot/350*800
			var oll = ol/350*800
			$(".bigOriginal img").css({'left':-oll,'top':-ott})
		})
		$(".original").mouseout(function(){
			$(".bigOriginal").css('display','none')
		})
});



































































