
//accordion js 

$(document).ready(function(){

  'use-srtict'
  var accordion_btn =$('.accordion-button');
  var active1= $('.active-1');
  var active2= $('.active-2');
  var active3= $('.active-3');
  var active4= $('.active-4');
  var br1= $(".active-2, .active-3, .active-4")
  var br2= $(".active-1, .active-3, .active-4")
  var br3= $(".active-1, .active-2, .active-4")
  var br4= $(".active-1, .active-2, .active-3")

  accordion_btn .click(function(){
    $(this).css("color","white");
    $(this).css( "background", "var(--bg-cl)"); 
  });
  $("#headingOne").click(function(){
       br1.css ("border", "none");
 });

  $("#headingTwo").click(function(){
      active2.css ("border", "1px solid orange") ;  
      br2.css ("border", "none");
  });

  $("#headingThree").click(function(){
    active3.css ("border", "1px solid orange") ;  
    br3.css ("border", "none");
  });

  $("#headingFour").click(function(){
    active4.css ("border", "1px solid orange") ;  
    br4.css ("border", "none");
});
});

//countdown js
  
$('#clock').countdown('2021/12/01', function(event) {
  $(this).html(event.strftime('<div class="time">%I<h5>hours</h5></div> <div class="time">%M<h5>mins</h5></div> <div class="time">%S<h5>secs</h5></div>'));
 
});

$(function() {  
  $("#today-list").niceScroll({
    cursorcolor: "#240b49",
    cursorborder: "0px",
    cursorwidth: "10px",
    autohidemode: false,
   
});
});

//scroll js

$(document).ready(function(){
  'use-srtict'
  var backToTop =$('.back-to-top');
  var menuBar= $('nav');
  var html_body = $('html, body');
  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
  
    if (scrolling >600){
      backToTop.fadeIn();
    }else{
      backToTop.fadeOut();
    }
  
    if (scrolling >400){
      menuBar.addClass('nav-fixed');
   }else{
      menuBar.removeClass('nav-fixed');
   }
  });
  
  backToTop.click(function(){
    html_body.animate({
      scrollTop:0
    },1500);
  });
});