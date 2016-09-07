$(function(){
	$(".showGoods .goods >li").mouseenter(function(){
		$(this).addClass("shadow");
	});
	$(".showGoods .goods >li").mouseleave(function(){
		$(this).removeClass("shadow");
	});
});