$(function(){
	
		//读取ajax数据
		function getData(){
			var ajaxUrl="http://localhost:8080/product/GetProductsByPage_get?pagesize=100&pageindex=1";
		$.ajax({
			url:ajaxUrl,
			success:function(result){
					for(var i=0;i<result.length;i++){
						//把result中的string转换成对象
						var dataObj=JSON.parse(result[i].Data);
						var str ="<tr><td class='col-lg-1 col-md-1'><input type='checkbox'/></td>";
						str=str+"<td class='col-lg-1 col-md-1'>"+dataObj.id+"</td><td class='col-lg-1 col-md-1'>"+dataObj.group+"</td>";
						str=str+"<td class='col-lg-1 col-md-1'>"+dataObj.goodName+"</td><td class='col-lg-1 col-md-1'>"+dataObj.saleTime+"</td>";
						str=str+"<td class='col-lg-1 col-md-1'>"+dataObj.address+"</td><td class='col-lg-1 col-md-1'>"+dataObj.price+"</td>";
						str=str+"<td class='col-lg-1 col-md-1'>"+dataObj.reckon+"</td>";
						str=str+"<td class='col-lg-1 col-md-1'>"+dataObj.chineseDesc+"</td>";
						str=str+"<td class='col-lg-1 col-md-1'>"+dataObj.englishDesc+"</td>";
						str=str+"<td class='col-lg-1 col-md-1'><button type='button' class='btn btn-default btn-sp' data-target='.bs-example-modal-lg' data-toggle='modal' id='rewrite'>修改</button></td>";
						str=str+"<td class='col-lg-1 col-md-1'><button type='button' class='btn btn-default btn-sm' style='color: rgb(221, 81, 64);'><span class='glyphicon glyphicon-trash'></span>删除</button></td></tr>";
						var tr=$(str);
						$("#content").append(tr);
				}
			},
			error:function(){
				alert("获取页面失败");
			},
			dataType:"json"
		});
	}
	getData();
	
	
	//添加数据
	$("#addBtn").click(function(){
		//清理数据
		$("#goodName").val("");
		$("#ID").val("");
		$("#group").val("");
		$("#saleTime").val("");
		$("#address").val("");
		$("#price").val("");
		$("#reckon").val("");
		$("#chineseDesc").val("");
		$("#engilshDesc").val("");
		
		//获取表单数据
		$("#subAddGoods").click(function(){
		var goodName=$("#goodName").val();
		var id=$("#ID").val();
		var group=$("#group").val();
		var saleTime=$("#saleTime").val();
		var address=$("#address").val();
		var price=$("#price").val();
		var reckon=$("#reckon").val();
		var chineseDesc=$("#chineseDesc").val();
		var englishDesc=$("#engilshDesc").val();
		if(goodName!=""&&id!=""&&group!=""&&saleTime!=""&&price!=""){
			//启用ajax添加数据
			var ajaxUrl="http://localhost:8080/product/CreateUpdateProduct_get";
			var ajaxId=id;
			var ajaxDataJson={
				"id":id,
				"goodName":goodName,
				"group":group,
				"saleTime":saleTime,
				"address":address,
				"price":price,
				"reckon":reckon,
				"chineseDesc":chineseDesc,
				"englishDesc":englishDesc
			}
			var dataJsonStr=JSON.stringify(ajaxDataJson);
			$.ajax({
				url:ajaxUrl,
				data:{
					"id":ajaxId,
					"datajson":dataJsonStr
				},
				success:function(result){
					if (result==1) {
						alert("操作成功！");
						$("#content").html("");
						getData();
					}else{
						alert("操作失败");
					}
				},
				error:function(){
					alert("ajax connection error");
				},
				dataType:"json"
			});
		}else{
			alert("数据不完整");
		}
	});
	})
		
	
	//修改数据
	$("table").on("click","#rewrite",function(){
		
		//获取表格的内容
		$("#ID").val($(this).parents("tr").children("td:eq(1)").text());
		$("#group").val($(this).parents("tr").children("td:eq(2)").text());
		$("#goodName").val($(this).parents("tr").children("td:eq(3)").text());
		$("#saleTime").val($(this).parents("tr").children("td:eq(4)").text());
		$("#address").val($(this).parents("tr").children("td:eq(5)").text());
		$("#price").val($(this).parents("tr").children("td:eq(6)").text());
		$("#reckon").val($(this).parents("tr").children("td:eq(7)").text());
		$("#chineseDesc").val($(this).parents("tr").children("td:eq(8)").text());
		$("#engilshDesc").val($(this).parents("tr").children("td:eq(9)").text());
		
		//点击提交数据
		$("#subAddGoods").click(function(){
		var goodName=$("#goodName").val();
		var id=$("#ID").val();
		var group=$("#group").val();
		var saleTime=$("#saleTime").val();
		var address=$("#address").val();
		var price=$("#price").val();
		var reckon=$("#reckon").val();
		var chineseDesc=$("#chineseDesc").val();
		var englishDesc=$("#engilshDesc").val();
		if(goodName!=""&&id!=""&&group!=""&&saleTime!=""&&price!=""){
			//启用ajax添加数据
			var ajaxUrl="http://localhost:8080/product/CreateUpdateProduct_get";
			var ajaxId=id;
			var ajaxDataJson={
				"id":id,
				"goodName":goodName,
				"group":group,
				"saleTime":saleTime,
				"address":address,
				"price":price,
				"reckon":reckon,
				"chineseDesc":chineseDesc,
				"englishDesc":englishDesc
			}
			var dataJsonStr=JSON.stringify(ajaxDataJson);
			$.ajax({
				url:ajaxUrl,
				data:{
					"id":ajaxId,
					"datajson":dataJsonStr
				},
				success:function(result){
					if (result==1) {
						//alert("修改成功！");
						$("#content").html("");
						getData();
					}else{
						//alert("修改失败");
					}
				},
				error:function(){
					alert("ajax connection error");
				},
				dataType:"json"
			});
		}
		});
	});
	//启用ajax删除数据
	$("table").on("click","td:nth-child(12)",function(){
		var id=$(this).parents("tr").children("td:eq(1)").text();
		//启用ajax
		var ajaxUrl="http://localhost:8080/product/DeleteProductById_get?id="+id;
			$.ajax({
				url:ajaxUrl,
				success:function(result){
					if (result==1) {
						alert("删除成功！");
						$("#content").html("");
						getData();
					}else{
						alert("删除失败");
					}
				},
				error:function(){
					alert("ajax connection error");
				}
			});
		$(this).parents("tr").remove();
	});
});































































