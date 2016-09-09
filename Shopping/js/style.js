$(function(){
	var fixLeftIndex=0;
	$(".fixRight,.fixLeft").fadeOut(0);
	$(document).scroll(function(){
		console.log($("body").scrollTop());
		if ($("body").scrollTop()>600) {
			$(".fixRight,.fixLeft").fadeIn(800);
			/*-----------拍卖会---------*/
			$(".fixLeft li:eq(0)").html("拍卖会");
			$(".fixLeft li:eq(0)").css({
				"background-color":"#463B7F",
				"color":"white",
				"font-size":"10px"
			});
			$(".fixLeft li:eq(1)").html("1F");
			$(".fixLeft li:eq(1)").css({
				"background-color":"#fff",
				"color":"black",
				"font-size":"16px"
			});
		}
		if ($("body").scrollTop()<600) {
			$(".fixRight,.fixLeft").fadeOut(800);
		}
		/*------------艺术品-------------*/
		if ($("body").scrollTop()>=1800) {
			fixLeftIndex=1;
			$(".fixLeft li:eq(0)").html("1F");
			$(".fixLeft li:eq(0)").css({
				"background-color":"#fff",
				"color":"black",
				"font-size":"16px"
			});
			$(".fixLeft li:eq(1)").html("艺术品");
			$(".fixLeft li:eq(1)").css({
				"background-color":"#463B7F",
				"color":"white",
				"font-size":"10px"
			});
			$(".fixLeft li:eq(2)").html("3F");
			$(".fixLeft li:eq(2)").css({
				"background-color":"#fff",
				"color":"black",
				"font-size":"16px"
			});
		}
		/*---------珠宝----------*/
		if ($("body").scrollTop()>=2600) {
			fixLeftIndex=2;
			$(".fixLeft li:eq(1)").html("2F");
			$(".fixLeft li:eq(1)").css({
				"background-color":"#fff",
				"color":"black",
				"font-size":"16px"
			});
			$(".fixLeft li:eq(2)").html("珠宝");
			$(".fixLeft li:eq(2)").css({
				"background-color":"#463B7F",
				"color":"white",
				"font-size":"10px"
			});
			$(".fixLeft li:eq(3)").html("4F");
			$(".fixLeft li:eq(3)").css({
				"background-color":"#fff",
				"color":"black",
				"font-size":"16px"
			});
		}
		/*--------奢侈品--------*/
		if ($("body").scrollTop()>=3400) {
			fixLeftIndex=3;
			$(".fixLeft li:eq(2)").html("3F");
			$(".fixLeft li:eq(2)").css({
				"background-color":"#fff",
				"color":"black",
				"font-size":"16px"
			});
			$(".fixLeft li:eq(3)").html("奢侈品");
			$(".fixLeft li:eq(3)").css({
				"background-color":"#463B7F",
				"color":"white",
				"font-size":"10px"
			});
			$(".fixLeft li:eq(4)").html("5F");
			$(".fixLeft li:eq(4)").css({
				"background-color":"#fff",
				"color":"black",
				"font-size":"16px"
			});
		}
		/*-----------老爷车----------*/
		if ($("body").scrollTop()>=3900) {
			fixLeftIndex=4;
			$(".fixLeft li:eq(3)").html("4F");
			$(".fixLeft li:eq(3)").css({
				"background-color":"#fff",
				"color":"black",
				"font-size":"16px"
			});
			$(".fixLeft li:eq(4)").html("老爷车");
			$(".fixLeft li:eq(4)").css({
				"background-color":"#463B7F",
				"color":"white",
				"font-size":"10px"
			});
			$(".fixLeft li:eq(5)").html("6F");
			$(".fixLeft li:eq(5)").css({
				"background-color":"#fff",
				"color":"black",
				"font-size":"16px"
			});
		}
		/*----------闪购---------*/
		if ($("body").scrollTop()>=4600) {
			fixLeftIndex=5;
			$(".fixLeft li:eq(4)").html("5F");
			$(".fixLeft li:eq(4)").css({
				"background-color":"#fff",
				"color":"black",
				"font-size":"16px"
			});
			$(".fixLeft li:eq(5)").html("闪购");
			$(".fixLeft li:eq(5)").css({
				"background-color":"#463B7F",
				"color":"white",
				"font-size":"10px"
			});
		}
		/*---------------左边楼梯的鼠标滑过事件---------------*/
		$(".fixLeft >li").mouseenter(function(){
			var content=$(this).text();
			if (content.indexOf("1")) {
				
			}
			$(this).css({
				"background-color":"#463B7F",
				"color":"white",
				"font-size":"10px"
				});
		});
		$(".fixLeft >li").mouseleave(function(){
			$(this).css({
				"background-color":"#fff",
				"color":"black",
				"font-size":"16px"
				});
			$(".fixLeft li:eq("+fixLeftIndex+")").css({
				"background-color":"#463B7F",
				"color":"white",
				"font-size":"10px"
			});
		});	
	});
	
	$(".fixRight li").mouseenter(function(){
		$(">div" ,this).css("display","block");
		$(">div" ,this).animate({
			"left":-($(">div" ,this).width()+40)
		},300);
	});
	$(".fixRight li").mouseleave(function(){
		$(">div" ,this).css("display","none");
		$(">div" ,this).css("left",-($(">div" ,this).width()+80))
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

});




































































