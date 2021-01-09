var tweet = prompt("Compose Your Tweet :");
var tweetCount = tweet.length;
alert(
  "You have written " +
    tweetCount +
    " characters, you have " +
    (140 - tweetCount) +
    " characters remaining."
);
