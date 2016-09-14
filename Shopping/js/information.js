//获取url中的数据信息
var id;
function UrlSearch() {
		var name, value;
		var str = location.href; //取得地址栏的url
		var num = str.indexOf("?"); //？ 的位置
		str = str.substr(num + 1); //取得所有参数  获取？后面的url内容。
		var arr=str.split("=");
		id=arr[1];
		//alert(id)
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
				$(".desc").text(dataObj.goodsName);
				$(".saleTime >span").text(dataObj.saleTime);
				$(".address >span").text(dataObj.address);
				$(".price span:eq(0)").text(dataObj.price);
				$(".price span:eq(1)").text(dataObj.reckon);
				$(".priceMark ul>li:eq(1)").text(dataObj.reckon);
				$(".priceMark ul>li:eq(2)").text(dataObj.reckon);
				$(".priceMark ul>li:eq(3)").text(dataObj.reckon);
			},
			error: function() {
				alert("获取页面失败");
			},
			dataType: "json"
		});

$(function(){
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



































































