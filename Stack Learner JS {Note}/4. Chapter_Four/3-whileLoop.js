// # Chapter Four
/*************************************************************************************************************
 # Loops are Statements Which Execute Some Block of Code
   Repeatedly until The Condition Becomes False

 # How To Use While Loop
   var i = 0
   while (i < 10) {
        console.log('sAiFuL bAppY')
        i++
   }
   As a Beginner - (Loops & Conditions are Two Main Fundamental Concepts of Core Programming.)
**************************************************************************************************************/

var isRunning = true;

while (isRunning) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand == 9) {
    console.log("Winner Winner Chicken Dinner");
    isRunning = false;
  } else {
    console.log("You Have Got " + rand + ". ");
  }
}
