$(document).ready(function(){
var count = 4;
var redirect = "https://www.andyflick.com";
countDown();

function countDown(){
    var timer = document.getElementById("timer");
    if(count > 0){
        count--;
        timer.innerHTML = "This page will redirect in "+count+" seconds.";
        setTimeout(countDown, 1000);
    }else{
        window.location.href = redirect;
    }
  }
});
