var common={
   renderBody:function (str) {
      $('body').prepend(str);
   },
   renderAppend:function ($el,str) {
      $el.append(str);
   },
   renderInner:function($el,str){
      $el.html(str);
   }
};
module.exports=common;
