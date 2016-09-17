var header=require('../tpls/header.string');
var banner=require('../tpls/banner.string');
var auction=require('../tpls/auction.string');
var artwork=require('../tpls/atrwork.string');
var jewelry=require('../tpls/jewelry.string');
var luxury=require('../tpls/luxury.string');
var oldcar=require('../tpls/oldcar.string');
var price=require('../tpls/price.string');
var like=require('../tpls/like.string');
var footer=require('../tpls/footer.string');
var fixed=require('../tpls/fixed.string');

module.exports={
	renderHtml:function(){
		$('body').prepend(header+banner+auction+artwork+jewelry+luxury+oldcar+price+like+footer+fixed);
	}
}
