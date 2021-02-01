"use strict";

// const useref = require("gulp-useref");
$(function () {
  // let hrefs = document.getElementsByTagName('a');
  // hrefs.addEventListener('click', function() {
  //   event.preventDefault();
  // });
  $('a').on('click', function (e) {
    e.preventDefault();
  });
  var cosmosCake = {
    init: function init() {
      // hamburger init function
      this.hamburgerInitFunc();
      this.aboutTextTiping(); // swiper init function

      this.swiperInitFunc(); // footer input val function

      this.inputValFunc();
      this.chooseFormFunc();
      this.footerButtonSlider();
      this.chooseBtnFunc();
    },
    hamburgerInitFunc: function hamburgerInitFunc() {
      $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('.header-menu_nav').slideToggle().toggleClass('is-active-menu');
      });
    },
    aboutTextTiping: function aboutTextTiping() {
      /*let img = $('.about-item').children('img');
        img.mouseover(function (e) {
        let attr = $(this).attr('src');
        let attrCut = attr.substring(0, attr.length - 4);
        let hover = '_hover.png';
        $(this).attr('src', attrCut+hover);
        // console.log(attr.substring(0, attr.length - 3));
        $(this).siblings('p')
      });
      img.mouseleave(function (e) {
        let attr = $(this).attr('src');
        let attrCut = attr.substring(0, attr.length - 10);
        let png = '.png';
        $(this).attr('src', attrCut+png);
      });*/
      new TypeIt('.about-item-text_1', {
        // strings: "",
        speed: 75,
        waitUntilVisible: true
      }).go();
      new TypeIt('.about-item-text_2', {
        // strings: "Мы за креативный и нестандартный подход!",
        speed: 75,
        waitUntilVisible: true
      }).go();
      new TypeIt('.about-item-text_3', {
        // strings: "Мы за креативный и нестандартный подход!",
        speed: 75,
        waitUntilVisible: true
      }).go();
      new TypeIt('.about-item-text_4', {
        // strings: "Мы за креативный и нестандартный подход!",
        speed: 75,
        waitUntilVisible: true
      }).go();
      new TypeIt('.about-item-text_5', {
        // strings: "Мы за креативный и нестандартный подход!",
        speed: 75,
        waitUntilVisible: true
      }).go();
      new TypeIt('.about-item-text_6', {
        // strings: 'Мы за креативный и нестандартный подход!',
        speed: 75,
        waitUntilVisible: true
      }).go();
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
    inputValFunc: function inputValFunc() {
      $('.input-range').on('input', function () {
        $('.input-text').val(this.value);
      });
    },
    chooseFormFunc: function chooseFormFunc() {
      $('.footer-form-list>li').on('click', function () {
        $(this).addClass('active').siblings(this).removeClass('active');
      });
      $('.footer-form-list>.cupcake').on('click', function () {
        $('.cupcake-form').addClass('open').siblings(this).removeClass('open');
      });
      $('.footer-form-list>.cake').on('click', function () {
        $('.cake-form').addClass('open').siblings(this).removeClass('open');
      });
      $('.footer-form-list>.gift').on('click', function () {
        $('.gift-form ').addClass('open').siblings(this).removeClass('open');
      });
      $('.footer-form-list>.individual').on('click', function () {
        $('.individual-form').addClass('open').siblings(this).removeClass('open');
      });
    },
    footerButtonSlider: function footerButtonSlider() {
      $('.next').click(function () {
        var currentBtn = $('.footer-form-item.active'),
            currentBtnIndex = $('.footer-form-item.active').index(),
            nextBtnIndex = currentBtnIndex + 1,
            nextBtn = $('.footer-form-item').eq(nextBtnIndex); // currentBtn.fadeOut(0);

        currentBtn.removeClass('active');

        if (nextBtnIndex == $('.footer-form-item:last').index() + 1) {
          // $('.footer-form-item').eq(0).fadeIn(0);
          $('.footer-form-item').eq(0).addClass('active').click();
        } else {
          // nextBtn.fadeIn(0);
          nextBtn.addClass('active').click();
        }
      });
      $('.prev').click(function () {
        var currentBtn = $('.footer-form-item.active'),
            currentBtnIndex = $('.footer-form-item.active').index(),
            prevBtnIndex = currentBtnIndex - 1,
            prevBtn = $('.footer-form-item').eq(prevBtnIndex); // currentBtn.fadeOut(0);

        currentBtn.removeClass('active'); // prevBtn.delay(0).fadeIn(0);

        prevBtn.addClass('active').click();
      });
    },
    chooseBtnFunc: function chooseBtnFunc() {
      var inputs = document.querySelectorAll('.choose-btn');
      Array.prototype.forEach.call(inputs, function (input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;
        input.addEventListener('change', function (e) {
          var fileName = '';
          if (this.files && this.files.length > 1) fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);else fileName = e.target.value.split('').pop();
          if (fileName) label.querySelector('span').innerHTML = fileName;else label.innerHTML = labelVal;
        });
      });
      document.querySelectorAll('.choose-btn').addEventListener('focus', function () {
        input.classList.add('has-focus');
      });
    }
  }.init();
});
//# sourceMappingURL=main.js.map
