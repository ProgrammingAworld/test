module.exports=function(){
	

//获取url中的数据信息
var group;
var count=0;
var counter=1;
function UrlSearch() {
		var name, value;
		var str = location.href; //取得地址栏的url
		var num = str.indexOf("?"); //？ 的位置
		str = str.substr(num + 1); //取得所有参数  获取？后面的url内容。
		var arr=str.split("=");
		group=arr[1];
	}
UrlSearch();
//启动ajax获取数据
		var ajaxUrl = "/product/GetProductsByPage_get?pagesize=62&pageindex=1";
		$.ajax({
			url: ajaxUrl,
			success: function(result) {
				for(var i = 0; i < result.length; i++) {
					//把result中的string转换成对象
					var dataObj = JSON.parse(result[i].Data);
					if(dataObj.group==group){
						if (count==0) {
						$(".location .nav").prepend("<img src=img/"+dataObj.id+".jpg /><span>开拍时间:"+dataObj.saleTime+"</span>");
					}
						if (counter<=24) {
							var str="<li><img src=img/"+dataObj.id+".jpg />";
							str=str+"<span>0</span><span>0</span>";
							str=str+"<p class='information'>"+dataObj.goodName+"</p>";
							str=str+"<span class='price'>起拍价:<span>"+dataObj.price+"</span></span>";
							str=str+"<span class='reckon'>估计报价:"+dataObj.reckon+"</span>";
							str=str+"<span class='saleTime'>开拍时间:"+dataObj.saleTime+"</span></li>";
							//alert(str);
							$(".location .goods").append(str);
						}else{
							if (count>=9) {
								$(".pageIndex ul li:eq(2)").removeClass("none");
								$(".pageIndex select option:eq(1)").removeClass("none");
							}
						}	
					count++;
					counter++;
					}
				}
				$(".location .right >span").text(count);
				$(".pageIndex .goodsCount >span").text(count);
				row=Math.ceil(count/4);
				$(".goodsBox").css("height",(470*row+310));
				//alert(row+" "+row*600);
				},
			error: function() {
				alert("获取页面失败");
			},
			dataType: "json"
		});

$(function() {

	$(".showGoods .goods >li").mouseenter(function() {
		$(this).addClass("shadow");
	});
	$(".showGoods .goods >li").mouseleave(function() {
		$(this).removeClass("shadow");
	});
	$(".pageIndex ul").on("click","li",function(){
		if ($(this).text()=="2"||$(this).text()=="1") {
			$(this).siblings("li").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(".location .goods").on("click","li",function(){
		var idStr=$(this).children("img").attr("src");
		id=idStr.split("/");
		id=id[1].split(".")[0];
		window.location.href="information.html?id="+id;
	});
});



}













