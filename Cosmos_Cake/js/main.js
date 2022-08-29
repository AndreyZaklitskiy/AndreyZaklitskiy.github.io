import $ from 'jquery';
import '../../node_modules/slick-carousel/slick/slick.min.js';
import TypeIt from "typeit";
import './inputmask.min.js';
import JustValidate from 'just-validate';
import AOS from 'aos';
$(function() {
  $('a').on('click', function (e) {
    e.preventDefault();
  }); 

let cosmosCake = {
  init() {

    this.preloaderFunc();
    // hamburger init function
    this.hamburgerInitFunc();

    this.firstScreenSlider();

    this.goodsSlider();

    this.autoTextTyping();

    this.gallerySlider();

    // footer input val function
    this.inputValFunc();

    this.swipeFormFunc();

    this.footerButtonSlider();

    this.chooseBtnFunc();

    this.aosInit();

    this.formValidationCupcake();

    this.formValidationCake();

    this.formValidationGift();

    this.formValidationIndividual();

  },
  preloaderFunc() {
    $('.preloader').addClass('dn');
  },
  hamburgerInitFunc() {
    $('.hamburger').on('click', function () {
      $(this).toggleClass('is-active');
      $('.header__menu').toggleClass('is-active-menu');
    });
  },
  firstScreenSlider() {
    $('.first-screen-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false
    });
  },
  goodsSlider() {
    $('.goods-slider__slick').slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slickPrev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slickNext"><i class="fas fa-chevron-right"></i></button>'

    });
  },
  autoTextTyping() {
    let itemsList = document.querySelectorAll('.about-item');

    for(let i = 0 ; i < itemsList.length; i++) {
      let init;
      let itemImg = itemsList[i].querySelector(`.about-item__img_${i+1}`);
      let itemText = itemsList[i].querySelector(`.about-item__text_${i+1}`);

      function changeImgSrc(){
        let icon = itemImg.querySelector('img');
        icon.setAttribute('src', `images/about/img-${i+1}_hover.png`);
        icon.classList.add('active');
      }

      init = new TypeIt(`.about-item__text_${i+1}`, {
        speed: 75,
        startDelay: 3
      })
      itemImg.addEventListener('mouseover', changeImgSrc);
      itemImg.addEventListener('mouseover', ()=> init.go());
    }
    // function onScroll() {
    //   let links = itemsList;
    //   let pos = window.pageYOffset;
    //   if((pos + window.innerHeight/2) > target.offsetTop) {
    //     console.log(target);
    //   }
    //   onScroll();
    // }
  },
  gallerySlider() {
  $('.gallery__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  },
  inputValFunc() {
    $('.input-range').on('input', function(){
      $('.input-text').val(this.value);
      $('.input-text').value = this.value;
    });
    $('.input-text').on('input', function(){
      $('.input-range').val(this.value);
    });
  },
  swipeFormFunc() {
    $('.footer-paginartion__item').on('click', function() {
      $(this).addClass('footer-paginartion__item_active').siblings(this).removeClass('footer-paginartion__item_active');
    });
    $('.footer-paginartion__item_cupcake').on('click', function() {
      $('._cupcake').addClass('open').siblings(this).removeClass('open');
    });
    $('.footer-paginartion__item_cake').on('click', function() {
      $('._cake').addClass('open').siblings(this).removeClass('open');
    });
    $('.footer-paginartion__item_gift').on('click', function() {
      $('._gift').addClass('open').siblings(this).removeClass('open');
    });
    $('.footer-paginartion__item_individual').on('click', function() {
      $('._individual').addClass('open').siblings(this).removeClass('open');
    });
  },
  footerButtonSlider() {
    $('.footer-paginartion__btn_next').click(function () {
      var currentBtn = $('.footer-paginartion__item_active'),
        currentBtnIndex = $('.footer-paginartion__item_active').index(),
        nextBtnIndex = currentBtnIndex + 1,
        nextBtn = $('.footer-paginartion__item').eq(nextBtnIndex);
        currentBtn.removeClass('footer-paginartion__item_active');
      if(nextBtnIndex == ($('.footer-paginartion__item:last').index()+1)) {
        $('.footer-paginartion__item').eq(0).addClass('footer-paginartion__item_active').click();
      }else{
        nextBtn.addClass('footer-paginartion__item_active').click();
      }
    });
    $('.footer-paginartion__btn_prev').click(function () {
      var currentBtn = $('.footer-paginartion__item_active'),
        currentBtnIndex = $('.footer-paginartion__item_active').index(),
        prevBtnIndex = currentBtnIndex - 1,
        prevBtn = $('.footer-paginartion__item').eq(prevBtnIndex);
      currentBtn.removeClass('footer-paginartion__item_active');
      prevBtn.addClass('footer-paginartion__item_active').click();
    })
  },
  chooseBtnFunc() {
    var inputs = document.querySelectorAll('.choose-btn');
    Array.prototype.forEach.call(inputs, function(input){
      var label	 = input.nextElementSibling,
        labelVal = label.innerHTML;
      input.addEventListener('change', function(e){
        var fileName = '';
        if( this.files && this.files.length > 1 )
          fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
          fileName = e.target.value.split('').pop();
        if( fileName )
          label.querySelector( 'span' ).innerHTML = fileName;
        else
          label.innerHTML = labelVal;
      });
    });
    // document.querySelectorAll('.choose-btn').addEventListener('focus', function(){ input.classList.add( 'has-focus' ); });

  },
  aosInit() {
    AOS.init();
  },
  formValidationCupcake() {
    const Form = document.forms[0];
    let telSelector = Form.querySelector('input[type="tel"]');
    let inputMask = new Inputmask('+38 (999) 999-99-99');
    inputMask.mask(telSelector);
    // Just-validate
    let validation = new JustValidate('._cupcake');
    validation
    .addField('#cupcake__reg_name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: ' '//Не менее 3 символов!
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: ' '//Не более 15 символов!
    },
    {
      rule: 'required',
      value: true,
      errorMessage: ' '//Введите имя!
    }
    ])
    .addField('#cupcake__reg_email', [
      {
        rule: 'required',
        value: true,
        errorMessage: ' ',//Email обязателен
      },
      {
        rule: 'email',
        value: true,
        errorMessage: ' ',//Введите корректный Email
      },
    ])
    .addField('#cupcake__reg_tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: ' ', //Телефон обязателен
      },
      {
        rule: 'function',
        validator: function() {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: ' ',//Введите корректный телефон
      },
    ])
    .addRequiredGroup('#cupcake_wrap',
      ' ',//сделайте свой выбор
      {
        errorFieldCssClass: 'errField',
        // errorFieldStyle: {
        //   border: '1px solid red',
        // }
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#cupcake_filling',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#cupcake_dough',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#cupcake_decorating',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#cupcake_deliver',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .onSuccess((event) => {
      console.log('Validation passes and form submitted', event)
            /*
      let formData = new FormData(Form);
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
          if(xhr.status === 200) {
            console.log("Отправлено!")
            Form.classList.add('_sending')
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      Form.reset();
      Form.classList.remove('_sending')
      */
      alert('Отправлено!');
      Form.reset();
    });
  },
  formValidationCake() {
    const Form = document.forms[1];
    let telSelector = Form.querySelector('input[type="tel"]');
    let inputMask = new Inputmask('+38 (999) 999-99-99');
    inputMask.mask(telSelector);
    // Just-validate
    let validation = new JustValidate('._cake');
    validation
    .addField('#cake__reg_name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: ' '//Не менее 3 символов!
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: ' '//Не более 15 символов!
    },
    {
      rule: 'required',
      value: true,
      errorMessage: ' '//Введите имя!
    }
    ])
    .addField('#cake__reg_email', [
      {
        rule: 'required',
        value: true,
        errorMessage: ' ',//Email обязателен
      },
      {
        rule: 'email',
        value: true,
        errorMessage: ' ',//Введите корректный Email
      },
    ])
    .addField('#cake__reg_tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: ' ', //Телефон обязателен
      },
      {
        rule: 'function',
        validator: function() {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: ' ',//Введите корректный телефон
      },
    ])
    .addRequiredGroup('#cake_wrap',
      ' ',//сделайте свой выбор
      {
        errorFieldCssClass: 'errField',
        // errorFieldStyle: {
        //   border: '1px solid red',
        // }
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#cake_filling',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#cake_dough',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#cake_decorating',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#cake_event',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#cake_deliver',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .onSuccess((event) => {
      console.log('Validation passes and form submitted', event)
            /*
      let formData = new FormData(Form);
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
          if(xhr.status === 200) {
            console.log("Отправлено!")
            Form.classList.add('_sending')
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      Form.reset();
      Form.classList.remove('_sending')
      */
      alert('Отправлено!');
      Form.reset();
    });
  },
  formValidationGift() {
    const Form = document.forms[2];
    let telSelector = Form.querySelector('input[type="tel"]');
    let inputMask = new Inputmask('+38 (999) 999-99-99');
    inputMask.mask(telSelector);
    // Just-validate
    let validation = new JustValidate('._gift');
    validation
    .addField('#gift__reg_name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: ' '//Не менее 3 символов!
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: ' '//Не более 15 символов!
    },
    {
      rule: 'required',
      value: true,
      errorMessage: ' '//Введите имя!
    }
    ])
    .addField('#gift__reg_email', [
      {
        rule: 'required',
        value: true,
        errorMessage: ' ',//Email обязателен
      },
      {
        rule: 'email',
        value: true,
        errorMessage: ' ',//Введите корректный Email
      },
    ])
    .addField('#gift__reg_tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: ' ', //Телефон обязателен
      },
      {
        rule: 'function',
        validator: function() {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: ' ',//Введите корректный телефон
      },
    ])
    .addRequiredGroup('#gift_gender',
      ' ',//сделайте свой выбор
      {
        errorFieldCssClass: 'errField',
        // errorFieldStyle: {
        //   border: '1px solid red',
        // }
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#gift_wrap',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#gift_dough',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#gift_filling',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#gift_theme',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#gift_event',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#gift_deliver',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .onSuccess((event) => {
      console.log('Validation passes and form submitted', event)
            /*
      let formData = new FormData(Form);
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
          if(xhr.status === 200) {
            console.log("Отправлено!")
            Form.classList.add('_sending')
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      Form.reset();
      Form.classList.remove('_sending')
      */
      alert('Отправлено!');
      alert('Отправлено!');
      Form.reset();
    });
  },
  formValidationIndividual() {
    const Form = document.forms[3];
    let telSelector = Form.querySelector('input[type="tel"]');
    let inputMask = new Inputmask('+38 (999) 999-99-99');
    inputMask.mask(telSelector);

    const validation = new JustValidate('._individual');
    validation
    .addField('#individual__reg_name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: ' '//Не менее 3 символов!
    },
    {
      rule: 'maxLength',
      value: 15,
      errorMessage: ' '//Не более 15 символов!
    },
    {
      rule: 'required',
      value: true,
      errorMessage: ' '//Введите имя!
    }
    ])
    .addField('#individual__reg_email', [
      {
        rule: 'required',
        value: true,
        errorMessage: ' ',//Email обязателен
      },
      {
        rule: 'email',
        value: true,
        errorMessage: ' ',//Введите корректный Email
      },
    ])
    .addField('#individual__reg_tel', [
      {
        rule: 'required',
        value: true,
        errorMessage: ' ', //Телефон обязателен
      },
      {
        rule: 'function',
        validator: function() {
          const phone = telSelector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: ' ',//Введите корректный телефон
      },
    ])
    .addRequiredGroup('#individual_gender',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#individual_sphere',
    ' ',
    {
      errorFieldCssClass: 'errField',
    },
    {
      tooltip: {
        position: 'right'
      },
    })
    .addRequiredGroup('#individual_type',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#individual_reason',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .addRequiredGroup('#individual_deliver',
      ' ',
      {
        errorFieldCssClass: 'errField',
      },
      {
        tooltip: {
          position: 'right'
        },
      }
    )
    .onSuccess((event) => {
      console.log('Validation passes and form submitted', event);
      /*
      let formData = new FormData(Form);
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
          if(xhr.status === 200) {
            console.log("Отправлено!")
            Form.classList.add('_sending')
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      Form.reset();
      Form.classList.remove('_sending')
      */
      alert('Отправлено!');
      Form.reset();
    });
  },
}.init();  
});