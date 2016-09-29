var template = require('../libs/template.js');

var str = require('../tpls/index.string');

var footer=require('../tpls/footer.string');

var common=require('../utils/common.util.js');

var Iscroll=require('../../../build/prd/scripts/iscroll-probe.js');

common.renderBody(str);

common.renderAppend($('.container'),footer);


//swiper的使用
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
      var strScrollTop='<div><div class="head"> \
        <img src="/build/images/arrow.png"/> \
        <span>下拉刷新...</span> \
    </div>';
       var strScrollBottom='<div class="foot"> \
           <img src="/build/images/arrow.png"/> \
           <span>上拉加载更多...</span> \
       </div></div>';
       html=strScrollTop+html+strScrollBottom;
       common.renderInner($("#index-scroll"),html);
   }
});

//创建滑动的盒子
//要求：
//1，滑动的内容必须是在盒子中的第一个元素
//2，要滑动的内容的高度必须大于盒子的高度
window.onload = function () {
  var myScroll = new Iscroll('#index-scroll', {
      probeType: 3,
      mouseWheel: true
  });
  myScroll.scrollBy(0, -35);

  var head = $('.head img'),
      topImgHasClass = head.hasClass('up');
  var foot = $('.foot img'),
      bottomImgHasClass = head.hasClass('down');

  myScroll.on('scroll', function () {
      var y = this.y,
          maxY = this.maxScrollY - y;
      if (y >= 0) {
          !topImgHasClass && head.addClass('up');
          return '';
      }
      if (maxY >= 0) {
          !bottomImgHasClass && foot.addClass('down');
          return '';
      }
  });

  myScroll.on('scrollEnd', function () {
      if (this.y >= -35 && this.y < 0) {
          myScroll.scrollTo(0, -35);
          head.removeClass('up');
      } else if (this.y >= 0) {
          head.attr('src', '/build/images/ajax-loader.gif');
          //TODO ajax下拉刷新数据

          setTimeout(function () {
              myScroll.scrollTo(0, -35);
              head.removeClass('up');
              head.attr('src', '/build/images/arrow.png');
          }, 1000);
      }

      var maxY = this.maxScrollY - this.y;
      if (maxY > -35 && maxY < 0) {
          var self = this;
          myScroll.scrollTo(0, self.maxScrollY + 35);
          foot.removeClass('down')
      } else if (maxY >= 0) {
          foot.attr('src', '/build/images/ajax-loader.gif');
          //TODO ajax上拉加载数据


          var self = this;
          setTimeout(function () {
              $('.foot').before(
                  '<div class="item">add 1</div>'+
                  '<div class="item">add 2</div>'+
                  '<div class="item">add 3</div>'+
                  '<div class="item">add 4</div>'+
                  '<div class="item">add 5</div>'
              );
              myScroll.refresh();

              myScroll.scrollTo(0, self.y + 35);
              foot.removeClass('down');
              foot.attr('src', '/build/images/arrow.png');
          }, 1000);
      }
  });
};
