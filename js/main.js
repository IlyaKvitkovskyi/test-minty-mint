$(function () {
  $('.button').click(function () {
    $('.form-signin').toggleClass('form-signin-left');
    $('.form-signup').toggleClass('form-signup-left');
    $('.form__switch-btn').toggleClass('form__switch-btn--active');
  });

  $('.btn').click(function () {
    $('html, body').animate({ scrollTop: $('#form').offset().top - 200 });
  });

  $('.slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
