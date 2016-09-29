var template = require('../libs/template.js');

var str = require('../tpls/index.string');

var footer=require('../tpls/footer.string');

var common=require('../utils/common.util.js');

var Iscroll=require('../../../build/prd/scripts/iscroll-probe.js');

common.renderBody(str);

common.renderAppend($('.container'),footer);

var mySwiper=new Swiper('#index-swiper', {
   onSlideChangeEnd:function (swiper) {
      $('#swiper-nav li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
   }
});

$('#swiper-nav li').on('tap',function () {
   mySwiper.slideTo($(this).index());
   $(this).addClass('active').siblings().removeClass('active');
});


$.ajax({
   url:'./api/list',
   success:function (res) {
      var html=template('list',res);
      common.renderInner($("#index-scroll"),html);
      // $('#test').show();
   }
});

//创建滑动的盒子
//要求：
//1，滑动的内容必须是在盒子中的第一个元素
//2，要滑动的内容的高度必须大于盒子的高度
window.onload=function () {
   var myScroll=new Iscroll("#index-scroll");
}
