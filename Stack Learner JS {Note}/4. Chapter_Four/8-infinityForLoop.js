// # Chapter Four
/*****************************************************************************
# What is Infinity For Loop?
    By omitting all parts of the head, the loop can also become infinite:

    # syntax - for (;;) {}
*******************************************************************************/
for (;;) {
  var rand = Math.round(Math.random() * 9 + 1);
  if (rand == 10) {
    console.log("Winner Winner Chicken Dinner");
    break;
  } else {
    console.log("You Have Got " + rand + ". ");
  }
}
