$(function() {

  $('a').click(function(e){

    e.preventDefault()

})


  //allmenu

  $('.allmenu_wrap .allmenu').click(function() {
    $(this).css('display', 'none');
    $('.allmenu_wrap .close').css('display', 'block');
    $('.all').toggle();
  })

  $('.allmenu_wrap .close').click(function() {
    $(this).css('display', 'none');
    $('.allmenu_wrap .allmenu').css('display', 'block');
    $('.all').toggle();
  })


  $('.all .a1>li>a').click(function() {    
    $('.all .a1>li>a').not(this).next().slideUp();
    $(this).next().slideToggle();    
  })


  






  //gnb
  $('#gnb>li').hover(function() {
    $('#gnb li .g2').show();
    $('header').append('<div class="gnb_bg"></div>')
  }, function() {
    $('#gnb li .g2').hide();
    $('.gnb_bg').remove()
  });

  





  //menu
  $('.menu').slick({
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    appendDots: $('.menu_btns'),
    responsive: [{
      breakpoint: 1279,
      settings: {
        slidesToShow: 1
      }
    }]
  })

  $('.fix_btns').click(function() {         
    $('html, body').animate({
      scrollTop : $('.top').offset().top
    })
  })
 

})