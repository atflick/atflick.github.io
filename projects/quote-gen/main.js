$(document).ready(function() {
  var tweetUrl = "";
  getQuote();
  $("#new-quote").click(function() {
    $("#slide").animate({
      top: "-612px",
      opacity: "0"
    }, 1000, function() {
      $("#slide").animate({
        top: "1224px",
        opacity: "0"
      }, 10, function() {
        $("#slide").animate({
          top: "0px",
          opacity: "1"
        }, 1000, getQuote());
      });
    });
  });

  function getQuote() {
    $.ajax({
      headers: {
        "X-Mashape-Key": "0inHdq4kdVmshrUOiT263Tzril9Tp1FywzojsntDmLJ9zAgp7C",
        "Content-Type": "application/x-www-form-urlencoded",
        accept: "application/json"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=movies',
      dataType: "json",
      success: function(response) {

        var quote = response.quote;
        var author = response.author;
        var quoteLength = quote.length + author.length;
        if (quoteLength > 140) {
          getQuote();
        } else {
          $("#quote-text").html(quote);
          $("#quote-author").html(author);
          tweetUrl = "https://twitter.com/intent/tweet?text=" + quote + " - " + author;
          console.log(tweetUrl);
          return tweetUrl;
        }
      }
    });
  };

  $("#tweet-quote").click(function() {
    window.open(tweetUrl);
  });
});