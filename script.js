$(function() {

  // var navbarHeight = $("#navbar").height();
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - 200;
      }, 1000);
      return false;
    }
  }
});
// $(function() {
//   prettyPrint();
//   $('.lang-html').mouseover(function() {
//      $(this).addClass('over');
//   });
//   $('.lang-html').mouseleave(function() {
//     $(this).removeClass('over');
//   });
// });
});
