window.onload=function(){
	var display=false;
	var timer;
	var songIndex=1;
	var progressWidth=266; 
	
	//播放函数
	function play(){
		if (!display) {
			$("#"+songIndex)[0].play();
			$("#"+songIndex)[0].volume=0.5;
			display=!display;
			$(this).removeClass("icon-bofang");
			$(this).addClass("icon-zanting");
			progressMove(songIndex);
			var time=getSongLong(songIndex);
			$(".circle").css({
				"transition": "transform "+time+"s linear",
				"transform":"rotate("+(90*time)+"deg) scale(0.7)"
			});
			$(".pointer").css({
				"transform":"rotate(-4deg)"
			});
			
		}else{
			var currentTime=getCurrentTime(songIndex);
			$(".circle").css({
				"transition": "transform 0s linear",
				"transform":"rotate("+(90*currentTime)+"deg) scale(0.7)"
			});
			$("#"+songIndex)[0].pause();
			display=!display;
			$(this).removeClass("icon-zanting");
			$(this).addClass("icon-bofang");
			$(".pointer").css({
				"transform":"rotate(-30deg)"
			});
		}
	}
	
	
	$(".bofang").on("click",play);
	
	/*--------------设置音量-------------*/
	/*-------------让音量的进度条显示出来--------------*/
	$(".icon-yinliang").on("click",function(e){
		$(".voiceLine").css("display","block");
		e.stopPropagation();
	});
	/*---------------让音量的进度条消失---------------*/
	$(".content").click(function(){
		$(".voiceLine").css("display","none");
	});
	$(".voiceLine").on("click",function(e){
		var lineHeight=$(this).offset().top+$(this).height()- e.clientY;
		if (Math.ceil(lineHeight)>70) {
			$("#"+songIndex)[0].volume=1;
		}else{
			console.log(Math.ceil(lineHeight/8)/10);
			$("#"+songIndex)[0].volume=Math.ceil(lineHeight/8)/10;
		}
		console.log($("#"+songIndex)[0].volume)
		$(".line").css("height",Math.ceil(lineHeight));
	});
	/*---------------设置音乐进度----------------*/
	$(".progress").on("click",function(e){
		$(".white").css("width",e.clientX-$(this).offset().left);
//		var speed=$(".white").width()/progressWidth;
//		$("#"+songIndex)[0].currentTime=parseInt(getSongLong(songIndex)*speed);
//		console.log(speed+" "+getSongLong(songIndex)+" "+parseInt(getSongLong(songIndex)*speed));
	});

	//点击下边的tab切换歌曲
	$("ul").on("click","li",function(){
		//获取下边tab的歌曲信息
		var songName=$(this).find("span:eq(0)").text();
		var name=$(this).find("span >b").text();
		var disk=$(this).find("span >i").text();
		var lis=$(this).parents("ul").children("li");
		var Index=parseInt($(this).find("input").val());
		$("#"+songIndex)[0].pause();
		$("#"+(Index))[0].play();
		display=true;
		$(".bofang").removeClass("icon-bofang");
		$(".bofang").addClass("icon-zanting");
		$(".pointer").css({
				"transform":"rotate(0deg)"
			});
		songIndex=Index;
		progressMove(songIndex);
		$(".informationBox .name").text(songName);
		$(".informationBox .album span:eq(0)").text(name);
		$(".informationBox .album span:eq(1)").text(disk);
		$.each(lis, function(index,value) {
			if (index==(Index-1)) {
				$(this).css("transform","scale(1.2)");
			}else{
				$(this).css("transform","scale(1)");
			}
		});
	})
	
	//点击上一首切换歌曲
	$(".icon-icon").click(function(){
		$("#"+songIndex)[0].pause();
		if (songIndex==1) {
			songIndex=5;
		}else{
			songIndex=songIndex-1;
		}
		$("#"+songIndex)[0].play();
		progressMove(songIndex);
		var songName=$(".list li:nth-child("+(songIndex)+") .songName").text();
		var name=$(".list li:nth-child("+songIndex+") b").text();
		var disk=$(".list li:nth-child("+songIndex+") i").text();
		$(".informationBox .name").text(songName);
		$(".informationBox .album span:eq(0)").text(name);
		$(".informationBox .album span:eq(1)").text(disk);
	});
	
	//点击下一首切换歌曲
	$(".icon-icon1").click(function(){
		$("#"+songIndex)[0].pause();
		if (songIndex==5) {
			songIndex=1;
		}else{
			songIndex=songIndex+1;
		}
		$("#"+songIndex)[0].play();
		var songName=$(".list li:nth-child("+(songIndex)+") .songName").text();
		var name=$(".list li:nth-child("+songIndex+") b").text();
		var disk=$(".list li:nth-child("+songIndex+") i").text();
		progressMove(songIndex);
		$(".informationBox .name").text(songName);
		$(".informationBox .album span:eq(0)").text(name);
		$(".informationBox .album span:eq(1)").text(disk);
	});
	
	//停止歌曲
	$(".icon-shuaxin").click(function(){
		  	$("#"+songIndex)[0].currentTime=0;
		  	var currentTime=getCurrentTime(songIndex);
		  	console.log(currentTime);
			$(".circle").css({
				"transition": "transform 0s linear",
				"transform":"rotate("+(90*currentTime)+"deg) scale(0.7)"
			});
			$("#"+songIndex)[0].pause();
			display=false;
			$(".bofang").removeClass("icon-zanting");
			$(".bofang").addClass("icon-bofang");
			$(".pointer").css({
				"transform":"rotate(-30deg)"
			});
	});
	//获取歌曲的歌曲时间
	function getSongLong(index){
		var log=$("#"+index);
		lon=log[0].duration;
		return lon;
	}
	
	//获取歌曲当前的播放时间
	function getCurrentTime(index){
		var cur=$("#"+index);
		cur=cur[0].currentTime;
		return cur;
	}
	
	//让歌曲进度条动起来和让前面的时间动起来
	
	function progressMove(index){
		clearInterval(timer);
		var lon=parseInt(getSongLong(songIndex));
		var lonMinute=parseInt(lon/60);
		var lonSecond=lon%60;
		if(lonSecond<10){
			lonSecond="0"+lonSecond;
		}
		var speed=progressWidth/lon;
		var cur;
		$(".displayBox .timeBox span:nth-child(2)").text("/"+lonMinute+":"+lonSecond);
		timer=setInterval(function(){
			cur=getCurrentTime(songIndex);
			var curMinute=parseInt(cur/60);
			var curSecond=parseInt(cur%60);
			if(curSecond<10){
			curSecond="0"+curSecond;
		}
			$(".displayBox .timeBox span:nth-child(1)").text(curMinute+":"+curSecond);
			$(".progress .white").css("width",speed*cur);
		},1000);
	}
};




























































