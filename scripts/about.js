var margAdjust = 0;
function checkScreen() {
  if ($(window).width() < 768) {
    margAdjust = 30;
  } else {
    margAdjust = 0;
  }
}

//About page waypoints
var aboutBlurbOne  = new Waypoint({
  element: document.getElementById("about-blurb-1"),
  handler: function(direction) {
    checkScreen();
    if (direction === 'down') {
      var margin = $("#about-blurb-1").height() + margAdjust + "px";
      $("#about-blurb-1").toggleClass("attach");
      $("#about-img-1").css("margin-top", margin);
    }
    if (direction === 'up') {
      $("#about-blurb-1").toggleClass("attach");
      $("#about-img-1").css("margin-top", 0);
    }
  }
});

var aboutImgOne  = new Waypoint({
  element: document.getElementById("about-img-1"),
  handler: function(direction) {
    checkScreen();
    if (direction === 'down') {
      $("#about-blurb-1").css("opacity", 0);
    }
    if (direction === 'up') {
      $("#about-blurb-1").css("opacity", 1);
    }
  }
});

var aboutBlurbTwo  = new Waypoint({
  element: document.getElementById("about-blurb-2"),
  handler: function(direction) {
    checkScreen();
    if (direction === 'down') {
      var margin = $("#about-blurb-2").height() + margAdjust + "px";
      $("#about-blurb-2").toggleClass("attach");
      $("#about-img-2").css("margin-top", margin);
    }
    if (direction === 'up') {
      $("#about-blurb-2").toggleClass("attach");
      $("#about-img-2").css("margin-top", 0);
    }
  }
});

var aboutImgTwo  = new Waypoint({
  element: document.getElementById("about-img-2"),
  handler: function(direction) {
    checkScreen();
    if (direction === 'down') {
      $("#about-blurb-2").css("opacity", 0);
    }
    if (direction === 'up') {
      $("#about-blurb-2").css("opacity", 1);
    }
  }
});

var aboutBlurbThree  = new Waypoint({
  element: document.getElementById("about-blurb-3"),
  handler: function(direction) {
    checkScreen();
    if (direction === 'down') {
      var margin = $("#about-blurb-3").height() + margAdjust + "px";
      $("#about-blurb-3").toggleClass("attach");
      $("#about-img-3").css("margin-top", margin);
    }
    if (direction === 'up') {
      $("#about-blurb-3").toggleClass("attach");
      $("#about-img-3").css("margin-top", 0);
    }
  }
});


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
