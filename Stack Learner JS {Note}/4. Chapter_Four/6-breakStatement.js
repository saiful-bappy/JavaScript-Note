// # Chapter Four
/*****************************************************************************
# What is Break Statement?
# Definition and Usage
    The break statement exits a switch statement or a loop 
    (for, for ... in, while, do ... while). When the break statement is used 
    with a switch statement, it breaks out of the switch block. This will stop 
    the execution of more execution of code and/or case testing inside the block. 
    When the break statement is used in a loop, it breaks the loop and continues 
    executing the code after the loop (if any).
    
    The break statement can also be used with an optional label reference, 
    to "jump out" of any JavaScript code block.

    Note: Without a label reference, the break statement can only be 
          used inside a loop or a switch.
*******************************************************************************/

while (true) {
  var rand = Math.round(Math.random() * 9 + 1);
  if (rand == 10) {
    console.log("Winner Winner Chicken Dinner");
    break;
  } else {
    console.log("You Have Got " + rand + ". ");
  }
}
// -----------------------------------------------------------
for (var i = 1; i < 10; i++) {
  if (i % 5 == 0) {
    break;
  } else {
    console.log(i);
  }
}
