$(document).ready(function () {
  'use strict';

  //===== Menu Active =====//
  var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
  $("nav ul li a").each(function () {
    if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
    $(this).parent('li').addClass("active").parent().parent().addClass("active").parent().parent().addClass("active");
  });

  //===== Menu Active =====//
  var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
  $(".res-menu ul li a").each(function () {
    if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
    $(this).parent('li').addClass("active").parent().parent().addClass("active-parent").parent().parent().addClass("active-parent");
  });

  //===== Width =====//
  var width = window.innerWidth;

  //===== Wow Animation Setting =====//
  if ($(".wow").length > 0) {
    var wow = new WOW({
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }); 

    wow.init();
  }

  //===== Header Search =====//
  $('.search-btn').on('click', function () {
    $('.header-search').addClass('active');
    return false;
  });
  $('.search-close-btn').on('click', function () {
    $('.header-search').removeClass('active');
    return false;
  });

  var res_header = $('.responsive-header').innerHeight();
  //===== Side Menu =====//
  $('.res-menu-btn').on('click', function () {
    $('.res-menu').toggleClass('slidedown');
    $(this).toggleClass('active');
    $('.res-menu').css({'top':res_header});
    return false;
  });
  $('.res-menu li.menu-item-has-children > a').on('click', function () {
    $(this).parent().siblings('li').children('ul').slideUp();
    $(this).parent().siblings('li').removeClass('active');
    $(this).parent().children('ul').slideToggle();
    $(this).parent().toggleClass('active');
    return false;
  });

  //===== Counter Up =====//
  if ($.isFunction($.fn.counterUp)) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }

  //===== LightBox =====//
  if ($.isFunction($.fn.fancybox)) {
    $('[data-fancybox],[data-fancybox="gallery"]').fancybox({});
  }

  //===== Scrollbar =====//
  if ($('.res-menu').length > 0) {
    var ps = new PerfectScrollbar('.res-menu');
  }

  //===== Accordions =====//
  if ($("#toggle").length > 0) {
    $(function() {
      $('#toggle .toggle-content').hide();
      $('#toggle h4:first').next().slideDown(500).parent().addClass("active");
      $('#toggle h4').on("click",function() {
        if($(this).next().is(':hidden')) {
          $('#toggle h4').next().slideUp(500).parent().removeClass("active");
          $(this).next().slideDown(500).parent().toggleClass("active");
        }
      });
    });
  }
  if ($("#toggle2").length > 0) {
    $(function() {
      $('#toggle2 .toggle-content').hide();
      $('#toggle2 h4:first').next().slideDown(500).parent().addClass("active");
      $('#toggle2 h4').on("click",function() {
        if($(this).next().is(':hidden')) {
          $('#toggle2 h4').next().slideUp(500).parent().removeClass("active");
          $(this).next().slideDown(500).parent().toggleClass("active");
        }
      });
    });
  }

  //===== Contact Form Validation =====//
  if($('#email-form').length){
    $('#submit').on('click',function(){
      var o = new Object();
      var form = '#email-form';
      var fname = $('#email-form .fname').val();
      var email = $('#email-form .email').val();
      if(fname == '' || email == '') {
        $('#email-form .response').html('<div class="failed alert alert-warning">Please fill the required fields.</div>');
        return false;
      }

      $.ajax({
        url:"sendemail.php",
        method:"POST",
        data: $(form).serialize(),
        beforeSend:function(){
          $('#email-form .response').html('<div class="text-info"><img src="assets/images/preloader.gif"> Loading...</div>');
        },
        success:function(data){
          $('form').trigger("reset");
          $('#email-form .response').fadeIn().html(data);
          setTimeout(function(){
            $('#email-form .response').fadeOut("slow");
          }, 5000);
        },
        error:function(){
          $('#email-form .response').fadeIn().html(data);
        }
      });
    });
  }

  //===== Slick Carousel =====//
  if ($.isFunction($.fn.slick)) {

    //=== Featured Area Carousel ===//
    $('.feat-caro').slick({
      arrows: false,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 6000,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      speed: 4000,
      draggable: true,
      dots: false,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      pauseOnHover: false
    });

    //=== Testimonials Carousel ===//
    $('.testi-caro').slick({
      arrows: true,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: false,
      autoplaySpeed: 5000,
      speed: 1000,
      draggable: true,
      dots: false,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-left-circle-arrow'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-left-circle-arrow'></i></button>",
      responsive: [{
        breakpoint: 1210,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }]
    });

    //=== Team Carousel ===//
    $('.team-caro').slick({
      arrows: true,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      fade: false,
      autoplay: false,
      autoplaySpeed: 5000,
      speed: 1000,
      draggable: true,
      dots: false,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-left-circle-arrow'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-left-circle-arrow'></i></button>",
      responsive: [{
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }]
    });

  }

}); //===== Document Ready Ends =====//

//===== Window onLoad =====//
$(window).on('load',function () {
  'use strict';
  
  //===== Page Loader =====//
  jQuery("#preloader").fadeOut(300);

  //===== Isotope =====//
  if (jQuery('.fltr-itm').length > 0) {
    if (jQuery().isotope) {
      var jQuerycontainer = jQuery('.masonry'); // cache container
      jQuerycontainer.isotope({
        itemSelector: '.fltr-itm',
        columnWidth: .2
      });
      jQuery('.filter-links a').on('click',function () {
        var selector = jQuery(this).attr('data-filter');
        jQuery('.filter-links li').removeClass('active');
        jQuery(this).parent().addClass('active');
        jQuerycontainer.isotope({ filter: selector });
        return false;
      });
      jQuerycontainer.isotope('layout'); // layout/layout
    }

    jQuery(window).resize(function () {
      if (jQuery().isotope) {
        jQuery('.masonry').isotope('layout'); // layout/relayout on window resize
      }
    });
  }

});//===== Window onLoad Ends =====//

//===== Sticky Header =====//
$(window).on('scroll',function () {
  'use strict';

  var menu_height = $('header').innerHeight();
  var scroll = $(window).scrollTop();
  if (scroll >= menu_height) {
    $('body').addClass('sticky');
  } else {
    $('body').removeClass('sticky');
  }

  var res_header = $('.responsive-header').innerHeight();
  if (scroll >= res_header) {
    $('.res-menu').css({'top':0});
    $('.res-btns > a.res-menu-btn').css({'position':'fixed','top':'3.125rem','z-index':'99999'});
  } else {
    $('.res-menu').css({'top':res_header});
    $('.res-btns > a.res-menu-btn').css({'position':'static','top':'3.125rem'});
  }

});//===== Window onScroll Ends =====//