var body=require('../tpls/information-body.string');
var header=require('../tpls/header.string');
var footer=require('../tpls/footer.string');


module.exports={
	renderHtml:function(){
		$('body').prepend(header+body+footer);
	}
}
