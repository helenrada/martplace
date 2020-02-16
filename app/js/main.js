$(function() {
  $(".weekly-slider__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: $(".product-slider__title")
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
});
