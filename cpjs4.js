(function(a){Drupal.behaviors.colorbox_close_prehide={attach:function(b,c){a(".cboxElement").colorbox({onOpen:function(){a("#cboxClose, #cboxNext, #cboxPrevious").hide()}})}};Drupal.behaviors.colorbox_close_hide={attach:function(b,c){a(".cboxElement").colorbox({onLoad:function(){a("#cboxClose, #cboxNext, #cboxPrevious").hide(3)}})}};Drupal.behaviors.coorbox_close_show={attach:function(b,c){a(".cboxElement").colorbox({onComplete:function(){setTimeout(function(){a("#cboxClose, #cboxNext, #cboxPrevious").show()},0)}})}}})(jQuery);(function(a){Drupal.behaviors.ajaxfix=(function(){return{attach:function(b,c){a.ajaxSetup({beforeSend:function(e,d){d.error=function(f,h,g){}}})}}})()})(jQuery);
/*
     FILE ARCHIVED ON 21:58:21 Nov 03, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:46:46 Aug 24, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
