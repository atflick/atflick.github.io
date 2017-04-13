$(document).ready(function(){
  $('#header-img').animate({opacity: '1'},1000);
  $('#header-content').delay(800).animate({opacity: '1'},1000);
});

// Menu Dropdown //

$('#menu-toggle').click(function() {
  $('.nav-items').toggleClass('open-nav')
});

// Portfolio boxes
$(".project-info").click(function(){
  $(this).toggleClass("open");
  $(this).find(".proj-arrow").toggleClass("arrow-flip");
  console.log(this);
  $(this).find("p").toggleClass("opacity-1");
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




var fadeMultiples  = new Waypoint({
  element: document.getElementById('skills'),
  handler: function(direction) {
    if (direction === 'down') {
      i = 0;
      array = $("#skills").find(".skillz").toArray()
      console.log(array);
      fadeLoop(array)
    }
  },
  offset: '75%'
});


function fadeLoop(arr) {
  if(i == arr.length){
    i = 0;
  }
  else {
    console.log(arr[i]);
    $(arr[i]).css({
      "opacity": "1"
    })
    i++
    setTimeout(fadeLoop(arr), 5000);
  }
}





// Form Validation

function validateForm() {
  var valid = 1;
  var email = document.getElementById('email');
  var email_validation = document.getElementById("email_validation");
  var name = document.getElementById('name');
  var name_validation = document.getElementById("name_validation");
  var message_validation = document.getElementById("message_validation");
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (name.value === "") {
    valid = 0;
    name_validation.innerHTML = "Field Required";
    name_validation.style.display = "block";
  } else {
    name_validation.style.display = "none";
  }

  if (message.value === "") {
    valid = 0;
    message_validation.innerHTML = "Field Required";
    message_validation.style.display = "block";
  } else {
    message_validation.style.display = "none";
  }

  if (email.value === "") {
    valid = 0;
    email_validation.innerHTML = "Field Required";
    email_validation.style.display = "block";
  } else {
    email_validation.style.display = "none";
  }

  if(!filter.test(email.value)) {
    valid = 0;
    email_validation.innerHTML = "Invalid email address";
    email_validation.style.display = "block";
  } else {
    email_validation.style.display = "none";
  }
  if (!valid)
    return false;
}
