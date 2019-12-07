$(document).ready(function() {
  $(".bg-custom").css(
    "background-color",
    "#16936A"
  );
  $(".nav-link").css(
    "color",
    "#FFFFFF"
  );
  $(".navbar").css(
    "min-height",
    "100px"
  )
  $(window).scroll(function() {
    var position = $(this).scrollTop();
    if (position > 400) {
      $(".navbar").css(
        "min-height",
        "70px"
      );
      $(".nav-link").css(
        "color",
        "#FFFFFF"
      );
    } else {
      $(".navbar").css(
        "min-height",
        "100px"
      );
      $(".nav-link").css(
        "color",
        "#FFFFFF"
      );
    }
  });
});
