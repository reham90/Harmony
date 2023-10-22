$(window).on('load', function() {
  $(".preloader").fadeOut();

});
$(document).ready(function() {
  new WOW().init();

 

  //fixed nav
  $stickyNav = $(".top-header");
  $(window).scroll("scroll load", function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 112) {
          $stickyNav.addClass("fixed-nav", 500);
      } else {
          $stickyNav.removeClass("fixed-nav", 500);
      }
      if (scroll == 0) {
          $stickyNav.removeClass("fixed-nav", 500);
      }
  });
  var $stickyheader = $("header");
  lastScroll = 0;
  $(window).scroll("scroll load", function() {
      var scroll = $(window).scrollTop();
      if (lastScroll - scroll > 0) {
          $stickyheader.addClass("fixed-header", {
              duration: 1000
          });
      } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
          $stickyheader.addClass("fixed-header", {
              duration: 1000
          });
      } else {
          $stickyheader.removeClass("fixed-header", {
              duration: 500
          });
      }
      lastScroll = scroll;
      if (scroll == 0) {
          $stickyheader.removeClass("fixed-header", {
              duration: 500
          });
      }
  });

   /// ////// ** main-slider** /////////
   const specials = new Swiper('.main-slider .swiper-container', {
    loop: true,
    autoplay: true,
    pagination: {
        el: '.main-slider .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.main-slider .swiper-btn-next',
        prevEl: '.main-slider .swiper-btn-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 1,
        },
    },
});

  

////////////** counter  *///////////////////////////////
var ax = 0;
$(window).scroll(function() {

    var oTop = $('#counter').offset().top - window.innerHeight;
    // Md.Asaduzzaman Muhid
    if (ax == 0 && $(window).scrollTop() > oTop) {
        $('.counter-number').each(function() {
            var $this = $(this);
            jQuery({
                Counter: 0
            }).animate({
                Counter: $this.text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.ceil(this.Counter));
                }
            });
        });
        ax = 1; // Md.Asaduzzaman Muhid
    }
});


 


  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function() {
      $("html,body").animate({
              scrollTop: 0,
          },
          1500
      );
  });
  $(this).scrollTop() >= 500 ?
      $(".arrow-top").fadeIn(300) :
      $(".arrow-top").fadeOut(300);

  $(window).scroll(function() {
      $(this).scrollTop() >= 500 ?
          $(".arrow-top").fadeIn(300) :
          $(".arrow-top").fadeOut(300);
  })



});