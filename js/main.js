$(function() {
   //particle
  
   //particle

   $(window).scroll(function() {
      if($(window).scrollTop() >= $('#about_wrap').offset().top) {
        $('body').addClass('onbg')
      }
      if($(window).scrollTop() < $('#about_wrap').offset().top) {
        $('body').removeClass('onbg')
      }
    })

   $(window).scroll(function() {
      if($(window).scrollTop() >= $('#about_wrap').offset().top) {
        $('header').addClass('bg_on')
      }
      if($(window).scrollTop() < $('#about_wrap').offset().top) {
        $('header').removeClass('bg_on')
      }
    })


    $('.util_wrap .util li').click(function() {
      let n = $(this).index();
      $('html, body').animate({
        scrollTop : $('section').eq(n).offset().top
      })
    })

    $('.util_wrap .util li').click(function() {
       $(this).addClass('on')
       $('.util_wrap .util li').not(this).removeClass('on');
    })


  
  function initparticles() {
    bubbles();
    hearts();
    lines();
    confetti();
    fire();
    sunbeams();
 }
 
 /*The measurements are ... whack (so to say), for more general text usage I would generate different sized particles for the size of text; consider this pen a POC*/
 
 function bubbles() {
    $.each($(".particletext.bubbles"), function(){
       var bubblecount = ($(this).width()/50)*10;
       for(var i = 0; i <= bubblecount; i++) {
          var size = ($.rnd(40,80)/10);
          $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
       }
    });
 }
 
 function hearts() {
    $.each($(".particletext.hearts"), function(){
       var heartcount = ($(this).width()/50)*5;
       for(var i = 0; i <= heartcount; i++) {
          var size = ($.rnd(60,120)/10);
          $(this).append('<span class="particle" style="top:' + $.rnd(20,80) + '%; left:' + $.rnd(0,95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
       }
    });
 }
 
 function lines() {
    $.each($(".particletext.lines"), function(){
       var linecount = ($(this).width()/50)*10;
       for(var i = 0; i <= linecount; i++) {
          $(this).append('<span class="particle" style="top:' + $.rnd(-30,30) + '%; left:' + $.rnd(-10,110) + '%;width:' + $.rnd(1,3) + 'px; height:' + $.rnd(20,80) + '%;animation-delay: -' + ($.rnd(0,30)/10) + 's;"></span>');
       }
    });
 }
 
 function confetti() {
    $.each($(".particletext.confetti"), function(){
       var confetticount = ($(this).width()/50)*10;
       for(var i = 0; i <= confetticount; i++) {
          $(this).append('<span class="particle c' + $.rnd(1,2) + '" style="top:' + $.rnd(10,50) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(6,8) + 'px; height:' + $.rnd(3,4) + 'px;animation-delay: ' + ($.rnd(0,30)/10) + 's;"></span>');
       }
    });
 }
 
 function fire() {
    $.each($(".particletext.fire"), function(){
       var firecount = ($(this).width()/50)*20;
       for(var i = 0; i <= firecount; i++) {
          var size = $.rnd(8,12);
          $(this).append('<span class="particle" style="top:' + $.rnd(40,70) + '%; left:' + $.rnd(-10,100) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0,20)/10) + 's;"></span>');
       }
    });
 }
 
 function sunbeams() {
    $.each($(".particletext.sunbeams"), function(){
       var linecount = ($(this).width()/50)*10;
       for(var i = 0; i <= linecount; i++) {
          $(this).append('<span class="particle" style="top:' + $.rnd(-50,0) + '%; left:' + $.rnd(0,100) + '%;width:' + $.rnd(1,3) + 'px; height:' + $.rnd(80,160) + '%;animation-delay: -' + ($.rnd(0,30)/10) + 's;"></span>');
       }
    });
 }
 
 jQuery.rnd = function(m,n) {
       m = parseInt(m);
       n = parseInt(n);
       return Math.floor( Math.random() * (n - m + 1) ) + m;
 }
 
 initparticles();
 
 

   // $('#portfolio_wrap .tabs li').click(function() {
   //    $(this).addClass('on')
   //    $('#portfolio_wrap .tabs li').not(this).removeClass('on');
      
   //    let gname = $(this).attr('class').substr(0,2);       
   //    $('.work_thumb li').hide();
   //    $('.work_thumb .' + gname).show();     
   // });


   //skills
   $('.skills_img .img').hover(function() {
      $(this).css({
         'transform' : 'scale(120%)',
         'transition' : '0.3s'
      })   
   }, function() {
      $(this).css({
         'transform' : 'scale(100%)',
         'transition' : '0.3s'
      })  
   });


   //skills

   





   //progress bar
   $('.chart1').circleProgress({
      size:100,
      //그래프 크기
      startAngle: -Math.PI/2 ,
      //시작지점 (기본값 Math.PI)
      value: 0.7,
      //그래프에 표시될 값 
      thickness:10,
      lineCap:'round',
      animation: true,
      //그래프가 그려지는 애니메이션 동작 여부
      fill: {gradient: ['#e54d26', '#f8632b']},
      emptyFill: "rgba(0,0,0,0.3)",
    }).on('circle-animation-progress',          
         function(event, progress, stepValue) {      
      $(this).find('strong').text(stepValue.toFixed(2).substr(1));
      });
      
    $('.chart2').circleProgress({
      size:100,
      //그래프 크기
      startAngle: -Math.PI/2 ,
      //시작지점 (기본값 Math.PI)
      value: 0.5,
      //그래프에 표시될 값 
      thickness:10,
      lineCap:'round',
      animation: true,
      //그래프가 그려지는 애니메이션 동작 여부
      fill: {gradient: ['#046fb7', '#28abe1']},
      emptyFill: "rgba(0,0,0,0.3)",
    }).on('circle-animation-progress',           
         function(event, progress, stepValue) {      
      $(this).find('strong').text(stepValue.toFixed(2).substr(1));
      });
  
   $('.chart3').circleProgress({
         size:100,
         //그래프 크기
         startAngle: -Math.PI/2 ,
         //시작지점 (기본값 Math.PI)
         value: 0.5,
         //그래프에 표시될 값 
         thickness:10,
         lineCap:'round',
         animation: true,
         //그래프가 그려지는 애니메이션 동작 여부
         fill: {gradient: ['#e9ca34', '#fede27']},
         emptyFill: "rgba(0,0,0,0.3)",
      }).on('circle-animation-progress',           
            function(event, progress, stepValue) {      
         $(this).find('strong').text(stepValue.toFixed(2).substr(1));
         });

   $('.chart4').circleProgress({
         size:100,
         //그래프 크기
         startAngle: -Math.PI/2 ,
         //시작지점 (기본값 Math.PI)
         value: 0.5,
         //그래프에 표시될 값 
         thickness:10,
         lineCap:'round',
         animation: true,
         //그래프가 그려지는 애니메이션 동작 여부
         fill: {gradient: ['#0968ac', '#076cb0']},
         emptyFill: "rgba(0,0,0,0.3)",
      }).on('circle-animation-progress',           
            function(event, progress, stepValue) {      
         $(this).find('strong').text(stepValue.toFixed(2).substr(1));
         });
         

      $('.chart5').circleProgress({
            size:100,
            //그래프 크기
            startAngle: -Math.PI/2 ,
            //시작지점 (기본값 Math.PI)
            value: 0.5,
            //그래프에 표시될 값 
            thickness:10,
            lineCap:'round',
            animation: true,
            //그래프가 그려지는 애니메이션 동작 여부
            fill: {gradient: ['#20d3f1', '#161324']},
            emptyFill: "rgba(0,0,0,0.3)",
         }).on('circle-animation-progress',           
               function(event, progress, stepValue) {      
            $(this).find('strong').text(stepValue.toFixed(2).substr(1));
            });         
  

      $('.chart6').circleProgress({
               size:100,
               //그래프 크기
               startAngle: -Math.PI/2 ,
               //시작지점 (기본값 Math.PI)
               value: 0.5,
               //그래프에 표시될 값 
               thickness:10,
               lineCap:'round',
               animation: true,
               //그래프가 그려지는 애니메이션 동작 여부
               fill: {gradient: ['#ff7f1e', '#1c0a00']},
               emptyFill: "rgba(0,0,0,0.3)",
            }).on('circle-animation-progress',           
                  function(event, progress, stepValue) {      
               $(this).find('strong').text(stepValue.toFixed(2).substr(1));
               });            
 
  
    // Let's emulate dynamic value update
   //  setTimeout(function() { c4.circleProgress('value', 0.7); }, 1000);
   //  setTimeout(function() { c4.circleProgress('value', 1.0); }, 1100);
   //  setTimeout(function() { c4.circleProgress('value', 0.5); }, 2100);
   //progress bar








   let graphic = $('.work_thumb').isotope()

  $('#portfolio_wrap .tabs li').click(function() {
   $(this).addClass('on')
   $('#portfolio_wrap .tabs li').not(this).removeClass('on');
   
    let val = $(this).attr('data-filter');
    graphic.isotope({
      filter : val
    })
  })




      $('#portfolio_wrap .work_thumb li').hover(function() {
         $(this).find('.des_wrap').stop().fadeIn();
         }, function() {
         $(this).find('.des_wrap').stop().fadeOut();     
         });

         
      // $('#portfolio_wrap .t2 a').hover(function() {
      //    $(this).addClass('image_wrap');         
      // }, function() {
      //    $(this).removeClass('image_wrap');
      // });
       
      // $('#portfolio_wrap .t2 a').hover(function() {
      //    $(this).append('<a class="image_wrap"></a>');
      //    $(this).append('<a class="image_wrap2"></a>');          
      // }, function() {
      //    $(this).remove('<a class="image_wrap"></a>');
      //    $(this).remove();
      // });

   
      lightbox.option({
         'fitImagesInViewport': true,
            wrapAround : true
         })


      
      $('.top_btn').click(function() {         
         $('html, body').animate({
           scrollTop : $('.top').offset().top
         })
       })



   
  });//ready()
  