function getPizza() {
  $.ajax({
    headers: {
      "Authorization": "Client-ID 2066dd9c106e48c",
    },
    url: 'https://api.imgur.com/3/gallery/r/pizza/top/month',
    dataType: "json",

  })

  .done(function(results) {
    $("#new-pizza").animate({
          top: 0
        }, 500);
    
        $("#pizzabox").css("display", "none"); 
    var z = "";
    console.log(results);
    for (var i = 0; i < 100; i++) {
        var x = Math.floor((Math.random() * 100) + 1);
        var y = results.data[x].is_album;
        console.log(y);
        if (y == false) {
          z = results.data[x].link;
          break;
        }
        else {
          z = results.data[x].link;
        };
    };
    
    var pizzaImg = "url(\"" + z +"\")";
    $("#pizzabox").css("background-image", pizzaImg);    
    $("#pizzabox").fadeIn(900);

    })
    
    .fail(function() {
      alert("Failed to fetch data. Check for services outage: http://status.imgur.com/")
    });
};

$(document).ready(function() {
  $('#new-pizza').on('click', getPizza);

  });        
