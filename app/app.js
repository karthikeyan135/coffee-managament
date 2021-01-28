$(function () {
  $(document).on("scroll", function () {
    if ($(window).scrollTop() > 100) {
      $(".scroll-top-wrapper").addClass("show");
    } else {
      $(".scroll-top-wrapper").removeClass("show");
    }
  });

  $(".scroll-top-wrapper").on("click", scrollToTop);
});

function scrollToTop() {
  verticalOffset = typeof verticalOffset != "undefined" ? verticalOffset : 0;
  element = $("body");
  offset = element.offset();
  offsetTop = offset.top;
  $("html, body").animate({ scrollTop: offsetTop }, 500, "linear");
}

var startPosition = 0;
var contentMargin = 10;

$(window).scroll(function () {
  if ($(window).scrollTop() > startPosition) {
    height = $("#top").height();
    $("#top")
      .css("position", "fixed")
      .css("top", 0)
      .css("width", "100%")
      .css("z-index", "999");

    $("#container #content").css("margin-top", height + contentMargin);
  } else {
    $("#top").removeAttr("style");
    $("#container #content").removeAttr("style");
  }
});

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

gtag("config", "UA-62586295-1");

window._mfq = window._mfq || [];
(function () {
  var mf = document.createElement("script");
  mf.type = "text/javascript";
  mf.async = true;
  mf.src =
    "//cdn.mouseflow.com/projects/8237c1d0-1f3b-4046-a40a-7bb7167c4fd6.js";
  document.getElementsByTagName("head")[0].appendChild(mf);
})();
