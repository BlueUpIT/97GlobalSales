(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  let lastScrollTop = 0;
  $(window).scroll(function () {
    var st = $(this).scrollTop();
    const anchoPagina = $(window).width();

    if (st > 150 && st < 300 && st > lastScrollTop) {
      $(".sticky-top")
        .addClass("shadow-sm navbar-scroll animacion-hacia-abajo")
        .removeClass("navbar-inicio")
        .css("z-index: 100");
        $(".sticky-top a").find("img.me-3").attr("src","img/Logo/LOGO_BLANCO_CON_TEXTO-removebg-preview.png");
    }
    if (st < 300 && st < lastScrollTop && lastScrollTop > 150) {
      if (!$(".sticky-top").hasClass("animacion-hacia-arriba")) {
        $(".sticky-top")
          .addClass("animacion-hacia-arriba")
          .removeClass("animacion-hacia-abajo");
          $(".sticky-top a").find("img.me-3").attr("src","img/Logo/logoinverter.png");

        setTimeout(() => {
          $(".sticky-top")
            .addClass("navbar-inicio")
            .removeClass("animacion-hacia-arriba navbar-scroll");
        }, 300);
      }
    }
    if (st === 0) {
      $(".sticky-top")
        .addClass("navbar-inicio")
        .removeClass("animacion-hacia-arriba navbar-scroll");
        $(".sticky-top a").find("img.me-3").attr("src","img/Logo/logoinverter.png");
    }
		// const boton = $("#navbarCollapseButton");
		// const ariaExpanded = boton.attr("aria-expanded");
    if (st >= 150 && anchoPagina > 991) {
			$(".nav-link-selector").addClass("nav-links-dark").removeClass("navbar-item-link");
    } else if (st < 150 && anchoPagina > 991) {
      $(".nav-link-selector").addClass("navbar-item-link").removeClass("nav-links-dark");
    }
    lastScrollTop = st;
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    dotsData: true,
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    dotsData: true,
  });
})(jQuery);
