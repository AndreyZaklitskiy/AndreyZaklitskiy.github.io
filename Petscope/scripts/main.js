'use strict';

document.addEventListener('DOMContentLoaded', function () {
  /*----------smooth scroll-------------*/
  $('a.scroll-link').on('click', function (event) {
    var $anchor = $(this);
    $('.hamburger').removeClass('is-active');
    $('.header-menu').removeClass('is-active');
    var prnt = $(this).parent(); 
    // prnt.addClass('active');
    // prnt.width(); // Force reflow
    // prnt.siblings('.header-menu--item').removeClass('active');
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 75
    }, {
      duration: 2000,
      speecialEasing: {
        width: 'linear',
        height: 'easeInOutCubic'
      }
    });
    event.preventDefault();
  });
  /*--------scroll menu underline switch-------------*/

  function scroll_active() {
    var window_top = $(window).scrollTop();
    var yakMain = $('#main').offset().top - 100;
    var yakInstr = $('#instruction').offset().top - 100;
    var yakQualitys = $('#qualitys').offset().top - 100;
    var yakDeliver = $('#delivery').offset().top - 100;
    var yakContacts = $('#contacts').offset().top - 200;

    if (window_top > yakContacts) {
      $('.header-menu--item').removeClass('active');
      $('a[href="#contacts"]').parent().addClass('active');
    } else if (window_top > yakDeliver) {
      $('.header-menu--item').removeClass('active');
      $('a[href="#delivery"]').parent().addClass('active');
    } else if (window_top > yakQualitys) {
      $('.header-menu--item').removeClass('active');
      $('a[href="#qualitys"]').parent().addClass('active');
    } else if (window_top > yakInstr) {
      $('.header-menu--item').removeClass('active');
      $('a[href="#instruction"]').parent().addClass('active');
    } else if (window_top < yakInstr) {
      $('.header-menu--item').removeClass('active');
      $('a[href="#main"]').parent().addClass('active');
    }
  }

  jQuery(function () {
    jQuery(window).scroll(scroll_active);
  });
  /*-------------fixed header----------------*/

  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    var headerHeight = $('.header').height();
    var footerHeight = $('.footer').height();

    if (wScroll > 20) {
      $('header').addClass('scroll');
      $('.head-block').css('padding-top', headerHeight);
    } else {
      $('header').removeClass('scroll');
      $('.head-block').css('padding-top', 0);
    }
  });
  /*------------hamburger--------------*/

  $('.hamburger').on('click', function () {
    $('.hamburger').toggleClass('is-active');
    $('.header-menu').toggleClass('is-active');
  });
  /*---------delivery btn---------------*/

  $('.table-button').on('click', function () {
    $('.table-button-list').slideToggle().toggleClass('open');
  });
  $('.table-button-list-item').on('click', function () {
    var self = $(this),
        text = self.children('span').text(),
        tableColIndex = self.index() + 1;
    $('.table-button > span').text(text);
    $('.table-col').removeClass('visible').eq(tableColIndex).addClass('visible');
  });
  /*----------------input mask--------------*/

  var tel = document.querySelectorAll('.phone-input');
  var im = new Inputmask('+7 (999) 999-99-99');
  im.mask(tel);
  /*-----------just validate-------------*/

  var validateForms = function validateForms(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
      rules: rules,
      submitHandler: function submitHandler(form) {
        var formData = new FormData(form);
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        };

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);
        xhr.reset();
      }
    });
  };

  validateForms('.consultation-form-2', {
    name: {
      required: true,
      minLength: 3
    },
    tel: {
      required: true
    }
  }, '.thanks-popup', 'send goal');
  validateForms('.consultation-form-1', {
    name: {
      required: true,
      minLength: 3
    },
    tel: {
      required: true
    }
  }, '.thanks-popup', 'send goal');
  validateForms('.head-form', {
    name: {
      required: true,
      minLength: 3
    },
    tel: {
      required: true,
      minLength: 10
    }
  }, '.thanks-popup', 'send goal');
});
//# sourceMappingURL=main.js.map
