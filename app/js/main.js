$(function() {
  $(".weekly-slider__box").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $(".weekly-slider__arrows"),
    nextArrow: '<span class="lnr lnr-chevron-right"></span>',
    prevArrow: '<span class="lnr lnr-chevron-left"></span>'
  });

  $(".followers__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: '<span class="lnr lnr-chevron-right"></span>',
    prevArrow: '<span class="lnr lnr-chevron-left"></span>',
    appendArrows: $(".followers-slider__arrows")
  });

  $(".rate-star").rateYo({
    rating: 4.5,
    readOnly: true,
    starWidth: "15px"
  });

  $(".product__star").rateYo({
    rating: 4.5,
    readOnly: true,
    starWidth: "13px"
  });

  $(".reviews__items").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: '<span class="lnr lnr-chevron-right"></span>',
    prevArrow: '<span class="lnr lnr-chevron-left"></span>'
  });

  var mixer = mixitup(".new-products__inner-box");
});
