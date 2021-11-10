$(document).ready(function () {
  //aos
  AOS.init();
    //세션3 슬라이드

     //메뉴 창 나타나게하기
     $(".menu >img").click(function(){
           $(".menu_wrapper").toggleClass("active");
          })
          $(".menu_wrapper>a").find('img').on('click',function(){
             $(".menu_wrapper").toggleClass("active");
          });

var mySwiper = new Swiper ('.main.swiper-container', { 
  slidesPerView : 1,
  slidesPerGroup : 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


var saleSwiper = new Swiper ('.sale-wrap.swiper-container', { 
  scrollbar : { 
    el : '.swiper-scrollbar',
    draggable : true, 
}, slidesPerView : 2.3, 
spaceBetween : 20,
slidesPerGroup : 2,
loopFillGroupWithBlank : true,
});

var stepSwiper = new Swiper ('.step-wrapper.swiper-container', { 
  slidesPerView : 1,
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      slideShadows: false,
      stretch: 70,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});

var storeSwiper = new Swiper ('.store-last.swiper-container', { 
  slidesPerView: 'auto',
    scrollbar : { 
      el : '.swiper-scrollbar',
      draggable : true, 
  },
  loopFillGroupWithBlank : true,
});

$("button.more").click(function(){
  $(".more-wrap").show();
  $(this).hide();
 })
 
 $( ".notice h3.title" ).click(function() {
  $( this ).toggleClass( "active" );
  $( this ).siblings("p.notice").toggleClass( "active" );
});

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

});