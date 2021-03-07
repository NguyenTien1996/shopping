$(document).ready(function(){
  $(".dot-map .ic-1").click(function(){
    $(this).toggleClass("active");
  });
  $("#fp-nav ul li").click(function(){
    $(this).toggleClass("active");
  })
})
$(document).ready(function ($) {
  $('.id1').counterUp({ delay: 10, time: 1500 });
});

// $('.page-scroll a').click(function(){
//   $('html, body').animate({
//       scrollTop: $( $(this).attr('href'),$(this).toggleClass('a') ).offset().top
//   }, 500);
//   return false;
// });
if ($(window).width() < 991) {
  new WOW().init();
}
if ($(window).width() > 991) {
  var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'twoPage', 'threePage','fourPage','fivePage'],
    navigation:true,
    scrollingSpeed: 1700,
    scrollOverflow: true,
    navigationTooltips: ['Forex and Cryptocurrency Market', 'What is ST9?', 'How to start?','Strategy','Withdraw','Withdraw','join us'],
    showActiveTooltip: true,
    menu: '#menu',
    responsiveWidth: 2000,
      afterLoad: function (anchorLink, index) {
          var tag = "#MenuWrapper ul li[data-id='" + index + "']";
          $('#MenuWrapper ul li').removeClass('active');
          $(tag).addClass('active');
          if (index != 1) {
              $('.backtop').addClass('show');
          }
          else {
              $('.backtop').removeClass('show');
          }
      }
});
}

// if ($(window).width() < 991) {
//   $(document).ready(function() {
    
//     $('.slider-strategy').lightSlider({
//       adaptiveHeight:true,
//       item:1,
//       pager:false,
//       auto:true,
//       slideMargin:0,
//       loop:true,
//       speed:2000,
//       pause	:4000,
//       mode:'fade'
//   });
//   });
// }

$(function() {
  var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;
      var links = this.el.find('.page-scroll a ');
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }
  Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
          $this = $(this),
          $next = $this.next();
      $next.slideToggle();
      $this.parent().toggleClass('open');
      if (!e.data.multiple) {
          $el.find('.page-scroll a .fp-sr-only').not($next).slideUp().parent().removeClass('open');
      };
  }   
  var accordion = new Accordion($('.accordion'), false);
});