$(function() {

  //gnb
  $('#gnb>li').hover(function() {
    $('#gnb li .g2').show();
    $('header').append('<div class="gnb_bg"></div>')
  }, function() {
    $('#gnb li .g2').hide();
    $('.gnb_bg').remove()
  })

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

 

})