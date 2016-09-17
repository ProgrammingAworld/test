var header=require('../tpls/header.string');
var body=require('../tpls/auction-body.string');
var footer=require('../tpls/footer.string');

module.exports={
	renderHtml:function(){
		$('body').prepend(header+body+footer);
	}
}
