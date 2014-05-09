
/**
 * Created with JetBrains PhpStorm.
 * User: oscitas
 * Date: 23/10/13
 * Time: 9:34 AM
 * To change this template use File | Settings | File Templates.
 */
jQuery(window).load(function() {
    if (typeof osCitasGlobalVar != 'undefined' && osCitasGlobalVar){
        jQuery(document).foundation();
    }
});

/** Smooth Scrolling Functionality **/
var jump=function(e)
{
    //alert('here');
   if (e){
       //e.preventDefault();
       var target = jQuery(this).attr("href").replace('/', '');
   }else{
       var target = location.hash;
   }

   jQuery('html,body').animate(
   {
       scrollTop: (jQuery(target).offset().top) - 100
   },500,function()
   {
       //location.hash = target;
   });

}

jQuery('html, body').hide();

jQuery(document).ready(function($)
{
    $(document).on('click', 'a[href*=#]', jump);

    if (location.hash){
        setTimeout(function(){
            $('html, body').scrollTop(0).show();
            jump();
        }, 0);
    }else{
        $('html, body').show();
    }
});
/** END SMOOTH SCROLLING FUNCTIONALITY **/


/**** allows for placeholder on contact form ***/
jQuery(document).ready(function() {

  jQuery.fn.cleardefault = function() {
  return this.focus(function() {
    if( this.value == this.defaultValue ) {
      this.value = "";
    }
  }).blur(function() {
    if( !this.value.length ) {
      this.value = this.defaultValue;
    }
  });
};
jQuery(".clearit input, .clearit textarea").cleardefault();

});

