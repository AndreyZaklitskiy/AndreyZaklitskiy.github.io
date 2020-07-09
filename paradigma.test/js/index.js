$(function() {

let pincet = {
    init() {
        for (let key in this) {
          if (key !== 'init') this[key]();
        }
      },

      discharge() {
        $('a, button').on('click', () => {
          event.preventDefault();
        });
      },

      PulsBtnOnHover() {
          let text = $('.head__client-card-lorem');
          let btn = $('.pulsation-btn');
          btn.on('mouseover', function () {
              text.addClass('visible');
          })
          btn.on('mouseout', function () {
            text.removeClass('visible');
        })
      },

      PopupButtonHandler() {
        $('.popup-form_btn span').text($('input[name="radio"]:checked').parent().next().text());

        $('.popup-form_btn').on('click', () => {
          $('.popup-form_list').slideToggle().toggleClass('open');
        });

        $('.popup-form_list-item').on('click', (e) => {
          if (!$(e.target).is('label')) {
            $('.popup-form_btn span').text($(e.target).parent().next('span').text())
            $('.popup-form_list').slideUp().removeClass('open');
          }
        });
      },
      MenuHandler() {
        let hamburger = $('.hamburger'),
            list      = $('.head__menu-list'),
            item      = $('.head__menu-item ');
        hamburger.on('click', () => {
          hamburger.toggleClass('is-active');
          list.slideToggle();
        })
        if ($(window).width() <= '1200') {
          list.children('li').children('a').removeClass('active');
          item.on('click', (e) => {
            let self = $(e.target),
              text = self.text();
              $('ul > .head__menu-item').children('a').text(text);

              console.log(text);
              hamburger.removeClass('is-active');
              list.slideUp();
          })
      }
      },
      PopupHendler() {
        $('.popup-close').on('click', () => {
          $('.popup').fadeOut();
          $('.popup_wrap').fadeOut();
        })
        $('.open-popup').on('click', () => {
          $('.popup_wrap').fadeIn();
          $('.popup_get-program').fadeIn();
        })
        $('.popup-btn').on('click', () => {
          $('.popup_get-program').fadeOut();
          $('.popup_done').fadeIn();
        })
      },

      FormValidation() {
        $("#phone").inputmask("+7 (999) 99-99-999");
        $(".popup-form").validate();
        $.validator.addClassRules({
          'input-name': {
            required: true,
            minlength: 2
          },
          'input-phone': {
            required: true,
            minlength: 9,
            maxlength: 18
          }
        });

        $(".input-phone").on("blur", () => {
          if($('.popup-form').valid()){
              $(".popup-btn").removeAttr("disabled");
         }
        });
      },
      ConnectionRellaxJs() {
        var rellax = new Rellax('.rellax');
      }
      

}.init();

});
