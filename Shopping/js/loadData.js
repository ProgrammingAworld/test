$(function() {
	//读取ajax数据
	function getData(count,group) {
		var ajaxUrl = "http://localhost:8080/product/GetProductsByPage_get?pagesize=62&pageindex=1";
		$.ajax({
			url: ajaxUrl,
			success: function(result) {
				var counter=1;
				for(var i = 0; i < result.length; i++) {
					//把result中的string转换成对象
					console.log(counter+" "+count);
					var dataObj = JSON.parse(result[i].Data);
					if ((dataObj.group==group)&&(counter<=count)) {
						var str="<li><img src=img/"+dataObj.id+".jpg /><p>"+dataObj.goodName+"</p><p>"+dataObj.saleTime+"</p></li>";
						$(".picList").append(str);
						counter++;
					}
				}
			},
			error: function() {
				alert("获取页面失败");
			},
			dataType: "json"
		});
	}
	//调用此函数获取数据
	getData(12,1);
});