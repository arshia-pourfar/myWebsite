$(document).ready(function () {

  if ($(window).width() >= 330) {
    $(".myName").animate({ fontSize: '200%' }, 1000);
    $(".myName span").animate({ fontSize: '110%' }, 1000);
  } else {
    $(".myName").animate({ fontSize: '160%' }, 1000);
    $(".myName span").animate({ fontSize: '110%' }, 1000);
  }
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
    afterLoad: function (anchorLink, index) {
      if (index == 1) {
        $('#navbar').removeClass('navbar-light');
        $('#navbar').addClass('navbar-dark');
      } else {
        $('#navbar').removeClass('navbar-dark');
        $('#navbar').addClass('navbar-light');
      }
    },
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


});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeSlide";
}