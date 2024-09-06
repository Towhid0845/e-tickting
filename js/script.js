$(function () {
  "use strict";

  // $(".search_update_btn").on("click", function () {
  //   $(".flight_search_overlay").addClass("show_flight_search_overlay");
  //   $(".flight_search_area").addClass("show_flight_search_area");
  // });
  // $(".flight_search_overlay").on("click", function () {
  //   $(".flight_search_overlay").removeClass("show_flight_search_overlay");
  // });
  

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


  if (document.getElementById('customDropdownMenu')) {
    // Prevent closing the dropdown when clicking inside it
    document.getElementById('customDropdownMenu').addEventListener('click', function (event) {
      event.stopPropagation();
    });
  }

  $(".filter_control_btn").click(function () {
    // Toggle the right position of the destination_filter_ element
    $(".destination_filter_").addClass("show");
  });
  $(".filter_close_btn").click(function () {
    // Toggle the right position of the destination_filter_ element
    $(".destination_filter_").removeClass("show");
  });

  // Fixed menu js start
  $(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");

    } else {
      $("#sticky-header").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  // wishlist js start
  $(".wishlist_btn").on("click", function () {
    $(this).find("i").toggleClass("fa-regular fa-solid");
  });

  // sedebar collapsed menu js
  // $(".sidebar_control_btn").on("click", function () {
  //   $("body").toggleClass("collapsed_sidebar");
  // });
  $(".sidebar_control_btn").on("click", function () {
    $("body").toggleClass("collapsed_sidebar");

    // Get the icon element
    var iconElement = $(".sidebar_control_btn i");

    // Check if the body has the class to determine the icon
    if ($("body").hasClass("collapsed_sidebar")) {
      // If sidebar is collapsed, change to another icon (adjust the class accordingly)
      iconElement.removeClass("fa-angles-left").addClass("fa-solid fa-angles-right");
    } else {
      // If sidebar is expanded, change back to the original icon
      iconElement.removeClass("fa-angles-left").addClass("fa-angles-left");
    }
  });

  $(".sidebar_control_btn_2").on("click", function () {
    // Get the icon element
    var iconElement = $(".sidebar_control_btn_2 i");

    // Toggle the "fa-bars" class
    iconElement.toggleClass("fas fa-bars");

    // Toggle the "fa-times" class
    iconElement.toggleClass("fas fa-times");

    // Toggle the "toggle-left-sidebar" class on the <div> element
    $(".left_sidebar_").toggleClass("toggle_left_sidebar");
  });

  $(".sidebar_control_btn_2").on("click", function () {
    // Toggle the "visible-overlay" class on the overlay <div>
    $(".sidebar_menus_overlay_").toggleClass("visible-overlay");
  });

  // Add a click event handler for the overlay to hide it
  $(".sidebar_menus_overlay_").on("click", function () {
    // Trigger a click on the control button to handle toggling of classes
    $(".sidebar_control_btn_2").click();
  });

  $(".wishlist_top .wishlist_btn_top").on("click", function () {
    $(".trip_create_wishlist_sidebar").addClass("show_trip_create_wishlist_sidebar");
  });
  $(".close_trip_btn").on("click", function () {
    $(".trip_create_wishlist_sidebar").removeClass("show_trip_create_wishlist_sidebar");
  });


  // -----Country Code Selection
  $("#mobile_code").intlTelInput({
    initialCountry: "in",
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
  });
  $("#mobile_code_2").intlTelInput({
    initialCountry: "in",
    separateDialCode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
  });


  // magnific popup js
  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade',
  });

  // $('.vidplay').magnificPopup({
  //   type: 'iframe',
  //   iframe: {
  //     markup: '<div class="mfp-iframe-scaler">' +
  //       '<div class="mfp-close"></div>' +
  //       '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
  //       '</div>',
  //     patterns: {
  //       youtube: {
  //         index: 'youtube.com/',
  //         id: 'v=',
  //         src: 'https://www.youtube.com/embed/%id%?autoplay=1'
  //       },
  //     },
  //     srcAction: 'iframe_src',
  //   }
  // });


  // $(".js-select2").select2({
  //   closeOnSelect: true
  // });

  // $('#profile_image_upload_modal').on('shown.bs.modal', function () {
  //   $(".avatar_slider").slick({
  //     dots: false,
  //     infinite: true,
  //     speed: 300,
  //     slidesToShow: 4,
  //     autoplay: true,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
  //     nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  //   });
  // });


  $(".destination_items_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });


  $(".wishlist_items_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    autoplay: true,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
    //   responsive: [{
    //     breakpoint: 576,
    //     settings: {
    //       slidesToShow: 1,
    //     }
    //   },
    // ]
  });

  $(".explore_details_slider").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });

  $(".must_see_slider_main").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: false,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  });


  // collapse accordion
  // $(".collapse_arrow").click(function(){
  //   // Find the closest .cheap_flight_item and toggle its .main_info
  //   var mainInfo = $(this).closest('.cheap_flight_item').find('.main_info');
  //   mainInfo.toggle();

  $(".datepicker").datepicker({
    numberOfMonths: 2,
    showButtonPanel: true
  });

  $(".datepicker1").datepicker({
    numberOfMonths: 1,
    showButtonPanel: true
  });

  $(".collapse_arrow").click(function () {
    // Find the closest .cheap_flight_item and toggle its .main_info
    var mainInfo = $(this).closest('.cheap_flight_item').find('.main_info');
    mainInfo.toggle();

    // Toggle icon class for the button
    var icon = $(this).find('i');
    icon.toggleClass('fa-angle-down fa-angle-up');
  });

  $(".accordion_title").click(function () {
    // Find the closest .cheap_flight_item and toggle its .main_info
    var mainInfo = $(this).closest('.common_accordion').find('.main_info');
    mainInfo.toggle();

    // Toggle icon class for the button
    var icon = $(this).find('i');
    icon.toggleClass('fa-angle-down fa-angle-up');
  });
  // quantity js
  // $(".cart-minus").on('click', function () {
  //   var $input = $(this).parent().find("input");
  //   var count = parseInt($input.val()) - 1;
  //   count = count < 1 ? 1 : count;
  //   $input.val(count);
  //   $input.change();
  //   return false;
  // });
  // $(".cart-plus").on('click', function () {
  //   var $input = $(this).parent().find("input");
  //   $input.val(parseInt($input.val()) + 1);
  //   $input.change();
  //   return false;
  // });

  // scroll to top js
  var btn = $(".scroll-to-top");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
          scrollTop: 0,
        },
        800
      );
    } else {
      $("html, body").animate({
          scrollTop: 0,
        },
        0
      );
    }
  });


  // Mobile menu js start

  $(".mobile-topbar .bars i").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
    return false;
  });

  $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  });

  $('.sub-mobile-menu ul').hide();
  $(".sub-mobile-menu a").on("click", function () {
    $(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });

});