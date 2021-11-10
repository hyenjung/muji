$(document).ready(function () {

$.get('./json/apparel.json',apparelText); 

//init
AOS.init();
skrollr.init()

  var subSwiper = new Swiper ('.locator .swiper-container', { 
    slidesPerView: 3,
    navigation: { nextEl: '.bt-next'}, 
    scrollbar: { el: '.swiper-scrollbar', }, })
    
    var sub2Swiper = new Swiper ('.last .swiper-container', { 
      slidesPerView: 5,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable : true
      },
  });

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





    $(window).scroll( function(){
			
        $('#img-wrap-s').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'left':'50%'},700);
            }
            
        }); 
    });

      $('.search a').click(function () {
        $(".search input").animate({
          right: '100px'
        },500).css({
          width: '150px',
          border : '2px solid #7f0019'
        })
        return false;
      });

      function apparelText(r) {
          for (var i = 0, html = ""; i < r.length; i++) {
            html += '<div class="item">';
          html += '      <div class="img-wrap">';
          html += '<a href="'+r[i].href+'"><img src="'+r[i].src+'" alt="'+r[i].alt+'"></a>';
          html += '      </div>';
          html += '      <h3 class="title">';
          html += '        <a href="'+r[i].href+'">';
          html += '          '+r[i].title+'';
          html += '        </a>';
          html += '      </h3>';
          html += '      <div class="cost">';
          html += '        <span>'+r[i].obj+'</span>';
          html += '        <p class="heart"></p>';
          html += '        <p class="bag"></p>';
          html += '        <p class="cost">'+r[i].cost+'</p>';
          html += '      </div>';
          html += '    </div>';
          }
        $(".apparel-wrap").find(".item-wrapper").append(html);
      }

// sub3 장바구니
      var num=1;
   $('.plus').click(function(){
        $(".add p").text(++num);
        });
    $('.minus').click(function(){
        if(num>1){
           $(".add p").text(--num); 
        }
        });
      
        // 버튼 active 유지
        $( ".icon .heart" ).click(function() {
         $( this ).toggleClass( "active" );
        });
        $( ".size p" ).click(function() {
          $( this ).toggleClass( "active" );
          $( this ).siblings().removeClass( "active" );
        });
        $( ".color p" ).click(function() {
          $( this ).toggleClass( "active" );
          $( this ).siblings().removeClass( "active" );
          });
          
// sub3 상품 메인사진 
      var target = $('.target');
      var zoom = target.data('zoom');
      $(".main-img")
          .on('mousemove', magnify)
          .prepend("<div class='magnifier'></div>")
  
      var magnifier = $('.magnifier');
      
      function magnify(e) {
   
          // 마우스 위치에서 .magnify의 위치를 차감해 컨테이너에 대한 마우스 좌표를 얻는다.
          var mouseX = e.pageX - $(this).offset().left;
          var mouseY = e.pageY - $(this).offset().top;
   
          // 컨테이너 밖으로 마우스가 벗어나면 돋보기를 없앤다.
          if (mouseX < $(this).width() && mouseY < $(this).height() && mouseX > 0 && mouseY > 0) {
              magnifier.fadeIn(100);
          } else {
              magnifier.fadeOut(100);
          }
   
          //돋보기가 존재할 때
          if (magnifier.is(":visible")) {
   
              // 3
              var rx = -(mouseX * zoom - magnifier.width() /2 );
              var ry = -(mouseY * zoom - magnifier.height() /2 );
   
              //돋보기를 마우스 위치에 따라 움직인다.
              //돋보기의 width, height 절반을 마우스 좌표에서 차감해 마우스와 돋보기 위치를 일치시킨다.
              var px = mouseX - magnifier.width() / 2;
              var py = mouseY - magnifier.height() / 2;
   
              //적용
              magnifier.css({
                  left: px,
                  top: py,
                  backgroundPosition: rx + "px " + ry + "px"
              });
          }
      }

      $(".main-img img").eq(0).siblings().hide();
      $('.magnifier').css({
        "background": "url('" + target.attr("src") + "') no-repeat",
        "background-size": target.width() * zoom + "px " + target.height() * zoom+ "px"
    });
    $(".sub-img img").click(function(){
        var imgIndex= $(this).index();
         $(".main-img img").eq(imgIndex).siblings().fadeOut();
        $(".main-img img").eq(imgIndex).fadeIn();
        $(".sub-img img").eq(imgIndex).fadeIn();
        $('.magnifier').css({
          "background": "url('" + target.eq(imgIndex).attr("src") + "') no-repeat",
          "background-size": target.eq(imgIndex).width() * zoom + "px " + target.eq(imgIndex).height() * zoom+ "px"
      });
    });

    $( ".category li" ).click(function() {
      var detailIndex= $(this).index();
      $( this ).toggleClass( "active" );
      $( this ).siblings().removeClass( "active" );
      $(".detail-wrap>div").eq(detailIndex).addClass( "active" );
      $(".detail-wrap>div").eq(detailIndex).siblings().removeClass( "active" );
      });
      
      $( ".notice h3.title" ).click(function() {
        $( this ).toggleClass( "active" );
        $( this ).siblings("p.notice").toggleClass( "active" );
      });
    });