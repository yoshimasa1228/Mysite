$(function(){

// PageTop
$('.js-pageTop').each(function(){
  var $window=$(window),
  $pageTop=$(this),
  $header = $('.js-header');

  $window.scroll(function(){
    var height=$window.scrollTop();
    if(height>=150){
      
      $pageTop.fadeIn('slow');
      $header.css('backgroundColor','#222');
    }else {
      $pageTop.fadeOut('slow');
      $header.css('backgroundColor','');
    };
  });

  $pageTop.on('click',function(event){
    event.preventDefault();
    $('html,body').animate({
      scrollTop:0
    },500,'swing');
   return false;
  });
});





// burgermenu

$('.js-burgermenu').each(function(){
  var $bgmenu=$(this),
  $btn=$('.js-btn'),
  $nav=$('.navigation'),
  $navList=$nav.find('li>a'),
  $body = $("body");


  $bgmenu.on('click',function(){
    $btn.toggleClass('open');

    if ($btn.hasClass('open')){
      $nav.animate({'marginRight':'0'},300);
      $body.css("overflow", "hidden");
    } else{

      if (window.matchMedia( "(max-width: 980px)" ).matches) {
        $nav.animate({'marginRight':'-50vw'},300);
        } else {
          $nav.animate({'marginRight':'-36vw'},300);
        }
      
      $body.css("overflow", "auto");
    }

    $navList.on('click',function(){
      if (window.matchMedia( "(max-width: 980px)" ).matches) {
        $nav.animate({'marginRight':'-50vw'},300);
        } else {
          $nav.animate({'marginRight':'-36vw'},300);
        }
      $btn.removeClass('open');
      $body.css("overflow", "auto");

    })
  })
})


$(window).resize(function() {
 
  if (window.matchMedia( "(max-width: 980px)" ).matches) {
    $('.navigation').css('width','50vw').css('marginRight','-50vw');
   
    } else {
      $('.navigation').css('width','36vw').css('marginRight','-36vw');
    }

});


})