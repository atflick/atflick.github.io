$(document).ready(function(){
  $('#header-img').animate({opacity: '1'},1000);
  $('#header-content').delay(800).animate({opacity: '1'},1000);
});

// Menu Dropdown //

// $('#menu-toggle').click(function() {
//   if ($('.nav-items').hasClass('open-nav')) {
//         $('.nav-items').removeClass('open-nav').slideUp('slow');
//     }
//   else {
//       $('.nav-items').addClass('open-nav').slideDown('slow');
//     }
// });
//
// $('.nav-items a').click(function() {
//     if ($('.nav-items').hasClass('open-nav')) {
//         // $('.link-container').removeClass('open-nav').slideUp('slow');
//         $('.nav-items').removeClass('open-nav').slideUp('slow');
//     }
// });

$('#menu-toggle').click(function() {
  $('.nav-items').toggleClass('open-nav')
});

// Portfolio boxes
$(".project-info").click(function(){
  $(this).toggleClass("open");
  $(this).find(".proj-arrow").toggleClass("arrow-flip");
});

// Logo cover on scroll
$(window).scroll(function(){
  var x = $(window).scrollTop();
  if ($(window).width() < 480) {
    if (x > 120) {
      $('#logo-cover').css('top', 120 - x);
    }
    else if (x > 170) {
      $('#logo-cover').css('top', -50);
    }
    else if (x < 120) {
      $('#logo-cover').css('top', 0);
    }
  }
  else {
    if (x > 400) {
      $('#logo-cover').css('top', 400 - x);
    }
    else if (x > 490) {
      $('#logo-cover').css('top', -90);
    }
    else if (x < 400) {
      $('#logo-cover').css('top', 0);
    }
  }
});

var homeTag  = new Waypoint({
  element: document.getElementById('home-tag'),
  handler: function(direction) {
    if (direction === 'down') {
      $('#home-tag').animate({opacity: '0'},1000);
    }
    if (direction === 'up') {
      $('#home-tag').animate({opacity: '1'},1000);
    }
  },
  offset: '50%'
});

var faderOne  = new Waypoint({
  element: document.getElementById('fade-one'),
  handler: function(direction) {
    if (direction === 'down') {
      $('#fade-one').animate({opacity: '1'},1000);
    }
    if (direction === 'up') {
      $('#fade-one').animate({opacity: '0'},1000);
    }
  },
  offset: '75%'
});

var faderTwo  = new Waypoint({
  element: document.getElementById('fade-two'),
  handler: function(direction) {
    if (direction === 'down') {
      $('#fade-two').animate({opacity: '1'},1000);
    }
    if (direction === 'up') {
      $('#fade-two').animate({opacity: '0'},1000);
    }
  },
  offset: '75%'
});
