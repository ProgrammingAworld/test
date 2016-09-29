/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	__webpack_require__(2);



/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var str = __webpack_require__(3);
	var footer = __webpack_require__(4);

	var common = __webpack_require__(5);

	common.renderBody($('body'), str);
	common.append($('.container'), footer);
	common.switchPage(0);

	// swiper 定义
	var mySwiper = new Swiper('#index-swiper', {
	  onSlideChangeEnd: function(swiper){
	    $('#swiper-nav li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
	  }
	});
	$('#swiper-nav li').on('tap', function () {
	  mySwiper.slideTo($(this).index());
	  $(this).addClass('active').siblings().removeClass('active');
	});

	$.ajax({
	  url: '/api/list.php',
	  success: function (res) {
	    var strScrollTop = '<div><div class="head"> \
	        <img src="/build/images/arrow.png"/> \
	        <span>下拉刷新...</span> \
	    </div>';

	    var strScrollBottom = '<div class="foot"> \
	        <img src="/build/images/arrow.png"/> \
	        <span>上拉加载更多...</span> \
	    </div></div>';

	    var html = template('list', res);

	    html = strScrollTop + html + strScrollBottom;

	    common.inner($('#index-scroll'), html);
	  }
	});

	window.onload = function () {
	  var myScroll = new IScroll('#index-scroll', {
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



/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">    <header>        <ul>            <li class=\"iconfont\">&#xe610;</li>            <li>                <span>彭展</span>                <span class=\"active\">刘东</span>            </li>            <li class=\"iconfont\">&#xe689;</li>        </ul>    </header>    <nav>        <ul id=\"swiper-nav\">            <li class=\"active\">足球小姐</li>            <li>足球小姐</li>            <li>足球小姐</li>        </ul>    </nav>    <section>      <div class=\"swiper-container\" id=\"index-swiper\">        <div class=\"swiper-wrapper\">          <div class=\"swiper-slide\">            <section id=\"index-scroll\">              <script id=\"list\" type=\"text/html\">                <ul>                  {{each data as value i}}                  <li><span><i><img src={{value.img}} alt=\"\"></i><b>{{value.title}}</b></span></li>                  {{/each}}                </ul>              </script>            </section>          </div>          <div class=\"swiper-slide\">slider2</div>          <div class=\"swiper-slide\">slider3</div>        </div>      </div>    </section></div>"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<footer id=\"footer\">    <ul>        <li class=\"active\" data-url=\"/build/index.html\">            <i class=\"iconfont\">&#xe6bb;</i>            <b>首页</b>        </li>        <li data-url=\"/build/search.html\">            <i class=\"iconfont\">&#xe65c;</i>            <b>发现</b>        </li>        <li>            <i class=\"iconfont\">&#xe664;</i>        </li>        <li>            <i class=\"iconfont\">&#xe735;</i>            <b>我的</b>        </li>        <li>            <i class=\"iconfont\">&#xe603;</i>            <b>退出</b>        </li>    </ul></footer>"

/***/ },
/* 5 */
/***/ function(module, exports) {

	/*** IMPORTS FROM imports-loader ***/
	var define = false;

	var common = {
	  renderBody: function ($el, str) {
	    $el.prepend(str);
	  },
	  inner: function ($el, str) {
	    $el.html(str);
	  },
	  append: function ($el, str) {
	    $el.append(str);
	  },

	  switchPage: function (index) {
	    $('#footer li').eq(index).addClass('active').siblings().removeClass('active');
	    $('#footer').on('tap', 'li', function () {
	      location.href = $(this).attr('data-url');
	    })
	  }
	};

	module.exports = common;



/***/ }
/******/ ]);