//About page waypoints
var aboutBlurbOne  = new Waypoint({
  element: document.getElementById("about-blurb-1"),
  handler: function(direction) {
    if (direction === 'down') {
      $("#about-blurb-1").toggleClass("attach");
      $("#about-img-1").toggleClass("margin-adjust");
    }
    if (direction === 'up') {
      $("#about-blurb-1").toggleClass("attach");
      $("#about-img-1").toggleClass("margin-adjust");
    }
  }
});


var aboutBlurbTwo  = new Waypoint({
  element: document.getElementById("about-blurb-2"),
  handler: function(direction) {
    if (direction === 'down') {
      $("#about-blurb-2").toggleClass("attach");
      $("#about-img-2").toggleClass("margin-adjust");
    }
    if (direction === 'up') {
      $("#about-blurb-2").toggleClass("attach");
      $("#about-img-2").toggleClass("margin-adjust");
    }
  }
});

var aboutBlurbThree  = new Waypoint({
  element: document.getElementById("about-blurb-3"),
  handler: function(direction) {
    if (direction === 'down') {
      $("#about-blurb-3").toggleClass("attach");
      $("#about-img-3").toggleClass("margin-adjust");
    }
    if (direction === 'up') {
      $("#about-blurb-3").toggleClass("attach");
      $("#about-img-3").toggleClass("margin-adjust");
    }
  }
});

// $(window).scroll(function(){
//   var y = ($('.paralax').offset().top / -10) + ($(window).scrollTop() + $(window).height()) / 10;
//   $('.paralax').css('background-position', '0 ' - y +'px')
// });

$(window).scroll(function(){
  var y = 0 + $(window).scrollTop() / 10;
  $('.paralax1').css('background-position', '0 ' - y +'px')
});

$(window).scroll(function(){
  var y = -50 + $(window).scrollTop() / 10;
  $('.paralax2').css('background-position', '0 ' - y +'px')
});

$(window).scroll(function(){
  var y = -100 + $(window).scrollTop() / 10;
  $('.paralax3').css('background-position', '0 ' - y +'px')
});
