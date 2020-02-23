$(function() {
  $(".weekly-slider__box").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    appendArrows: $(".weekly-slider__arrows")
  });

  $(".followers-box").slick({
    slidesToShow: 3,
    slidesToScroll: 1
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

  var mixer = mixitup(".new-products__inner-box");
});
