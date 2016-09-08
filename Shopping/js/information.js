$(function(){
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
});



































































