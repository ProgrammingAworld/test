var header=require('../tpls/login-header.string');
var body=require('../tpls/login-body.string');
var footer=require('../tpls/footer.string');

module.exports={
	renderHtml:function(){
		$('body').prepend(header+body+footer);
	}
}
