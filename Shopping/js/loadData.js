
	//读取ajax数据
	function getData(count, group) {
		var ajaxUrl = "http://localhost:8080/product/GetProductsByPage_get?pagesize=62&pageindex=1";
		$.ajax({
			url: ajaxUrl,
			success: function(result) {
				var counter = 1;
				for(var i = 0; i < result.length; i++) {
					//把result中的string转换成对象
					var dataObj = JSON.parse(result[i].Data);
					//拍卖会页面加载
					if(group == 1||group==6) {
						if((dataObj.group == group) && (counter <= count)) {
							var str = "<li><img src=img/" + dataObj.id + ".jpg /><p>" + dataObj.goodName + "</p><p>" + dataObj.saleTime + "</p></li>";
							$(".auction .picList").append(str);
							counter++;
						}
					}
					if (group==2) {
						if((dataObj.group == group) && (counter <= count)) {
							var str ="<li><p>清中期</p><p>翠玉莲子形十八子手串</p><img src=img/"+dataObj.id+".jpg /></li>";
							$(".artwork .right ul").append(str);
							counter++;
						}
					}
					if (group==4) {
						if((dataObj.group == group) && (counter <= count)) {
							var str ="<li class='information'><img src=img/"+dataObj.id+".jpg /><span></span><div><p>"+dataObj.goodName+"</p><p>起拍价:"+dataObj.price+"</p></div></li>";
							$(".oldCar ul").append(str);
							counter++;
						}
					}
					if (group==5) {
						if((dataObj.group == 1) && (counter <= count)) {
							var str ="<li><img src=img/"+dataObj.id+"(1).jpg /><span></span></li>";
							$(".price .right").append(str);
							counter++;
						}
					}
					if (group==6) {
						if((dataObj.group == 6) && (counter <= count)) {
							var str ="<li class='information'><img src=img/"+dataObj.id+".jpg /><p>"+dataObj.goodName+"</p><p>起拍价<span>"+dataObj.price+"</span></p></li>";
							$(".likeBanner ul").append(str);
							counter++;
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
	getData(20, 1);

	//艺术品精选
	getData(8, 2);
	//老爷车部分
	getData(8, 4);
	
	//闪购部分
	getData(8, 5);
	
	//猜你喜欢
	getData(10,6);
