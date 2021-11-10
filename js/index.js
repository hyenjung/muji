$(document).ready(function () {
    
    //세션3 슬라이드
var mySwiper = new Swiper ('.swiper-container', { 
  slidesPerView: 1,
  autoplay: { delay: 5000 },
  loop: true,
  navigation: { nextEl: '.bt-next'}, 
  scrollbar: { el: '.swiper-scrollbar', }, })

  //aos
  AOS.init();
 
 
  // 스크롤에 따라 상위 네비게이션 창 나오게하기

  var sections = $('.target'),
      nav = $('#menu'),
      nav_height = nav.outerHeight();

  $(window).on('scroll', function() {
      var cur_pos = $(this).scrollTop();

      sections.each(function() {
          var top = $(this).offset().top - nav_height,
              bottom = top + $(this).outerHeight();

          if (cur_pos >= top -150 && cur_pos <= bottom+150) {
              nav.find('a').parent().removeClass('on');

              $(this).parent().addClass('on');
              nav.find('a[href="#' + $(this).attr('id') + '"]').parent().addClass('on');
          }
      });
  });

  nav.find('a').on('click', function() {
      var $el = $(this),
          id = $el.attr('href');
      $('html, body').animate({
          scrollTop: $(id).offset().top 
      }, 500);
      $(this).parent().addClass('on');
      $(this).parent().siblings().removeClass('on');
      return false;
  });

  $(window).on('scroll', function() {
      if ($(window).scrollTop() > 400) {
          $('#menu').addClass("active");
      } else {
          $('#menu').removeClass("active");
        }
    })
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('.main_wrap h3.title').addClass("active");
        } else {
            $('.main_wrap h3.title').removeClass("active");
          }
      })


    //메뉴 창 나타나게하기
        
  function clickMenu() {
      $("#menu-on").find('img').on('click',function(){
          $(".menu_wrapper").toggleClass("active");
         })
         $(".menu_wrapper>a").find('img').on('click',function(){
            $(".menu_wrapper").toggleClass("active");
         })
      }
  clickMenu();


        //왼쪽 카피라이트 스크롤에 따라 사라졌다가 나타나게하기
        var lastScrollTop = 0; 
        var delta = 5; 
        var copybarHeight = $('.copy_rt').outerHeight(); 
        var navbarHeight = $('ul.gnb').outerHeight(); 
        var didScroll;
        
        $(window).scroll(function(event){ didScroll = true; 
        }); 
        setInterval(function() { 
        if (didScroll) { hasScrolled(); didScroll = false; } 
        }, 250); 
        function hasScrolled() { 
        var st = $(this).scrollTop(); 
        if(Math.abs(lastScrollTop - st) <= delta) 
        return; 
        // Scroll Down 
        if (st > lastScrollTop && st > copybarHeight){ 
        $('.copy_rt').removeClass('copy_down').addClass('copy_up');
        } else { 
        // Scroll Up 
        if(st + $(window).height() < $(document).height()) { 
        $('.copy_rt').removeClass('copy_up').addClass('copy-down'); } 
        }

         //오른쪽 네비게이션 스크롤에 따라 사라졌다가 나타나게하기
        // Scroll Down 
        if (st > lastScrollTop && st > navbarHeight){ 
          $('ul.gnb').removeClass('nav-down').addClass('nav-up');
          } else { 
          // Scroll Up 
          if(st + $(window).height() < $(document).height()) { 
          $('ul.gnb').removeClass('nav-up').addClass('nav-down'); } 
          }
        lastScrollTop = st; 
        }

});