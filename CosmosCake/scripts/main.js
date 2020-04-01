"use strict";

// const useref = require("gulp-useref");
$(document).ready(function () {// let hrefs = document.getElementsByTagName('a');
  // hrefs.addEventListener('click', function() {
  //   event.preventDefault();
  // });
});
var cosmosCake = {
  init: function init() {
    // hamburger init function
    this.hamburgerInitFunc(); // swiper init function

    this.swiperInitFunc(); // footer input val function

    this.iputValFunc();
  },
  hamburgerInitFunc: function hamburgerInitFunc() {
    $('.hamburger').on('click', function () {
      $(this).toggleClass('is-active');
      $('.header-menu_nav').slideToggle().toggleClass('is-active-menu');
    });
  },
  swiperInitFunc: function swiperInitFunc() {
    new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 3,
      simulateTouch: false,
      spaceBetween: 30,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        767: {
          slidesPerView: 2
        },
        992: {
          slidesPerView: 3
        }
      }
    });
  },
  iputValFunc: function iputValFunc() {
    $('.input-range').on('input', function () {
      $('.input-text').val(this.value);
    });
  },
  chooseFormFunc: function chooseFormFunc() {
    $('.footer-form-list>li>.cupcake').on('click', function () {
      $(this).addClass('active').siblings.removeClass('active');
      $('.cupcake-form').addClass('open').siblings.removeClass('open');
    });
    $('.footer-form-list>li>.cake').on('click', function () {
      $(this).addClass('active').siblings.removeClass('active');
      $('.cake-form').addClass('open').siblings.removeClass('open');
    });
  }
}.init();
//# sourceMappingURL=main.js.map
