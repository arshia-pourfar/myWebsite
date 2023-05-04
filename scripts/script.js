$(document).ready(function () {
  $('.multiscroll').multiscroll({
    verticalCentered: true,
    scrollingSpeed: 900,
    easing: 'easeInQuart',
    easingcss3: false,
    anchors: ['first', 'about', 'portfolio', 'contact'],
    menu: '#myMenu',
    sectionsColor: [],
    navigation: true,
    navigationPosition: 'right',
    navigationColor: '#fbf41b',
    navigationTooltips: [],
    loopBottom: false,
    loopTop: false,
    css3: false,
    paddingTop: 0,
    paddingBottom: 0,
    normalScrollElements: null,
    scrollOverflow: false,
    scrollOverflowOptions: null,
    keyboardScrolling: true,
    touchSensitivity: 5,

    //responsive
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveExpand: false,

    // Custom selectors
    sectionSelector: '.ms-section',
    leftSelector: '.ms-left',
    rightSelector: '.ms-right',

    //events
    onLeave: function (index, nextIndex, direction) { },
    afterLoad: function (anchorLink, index) { },
    afterRender: function () { },
    afterResize: function () { },
  });

  // typing animation
  (function ($) {
    $.fn.writeText = function (content) {
      var contentArray = content.split(""),
        current = 0,
        elem = this;
      setInterval(function () {
        if (current < contentArray.length) {
          elem.text(elem.text() + contentArray[current++]);
        }
      }, 100);
    };
  })(jQuery);

  // input text for typing animation
  $("#holder").writeText("Web And Wordpress Developer ");

  // Fade Transition
  var splide8 = new Splide('.splide-8', {
    type: 'fade',
    rewind: true,
  });
  splide8.mount();
  
  var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
  var isiPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
  if (isAndroid) {
    $('.first-section').css("background-attachment", "scroll");
  } if (isiPhone) {
    $('.first-section').css("background-attachment", "fixed");
  }

});
