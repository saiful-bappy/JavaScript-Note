// # Chapter Four
/*************************************************************************************************************
 # Loops are Statements Which Execute Some Block of Code
   Repeatedly until The Condition Becomes False

   for (initializer-var, condition, increment) {

   }

   As a Beginner - (Loops & Conditions are Two Main Fundamental Concepts of Core Programming.)

**************************************************************************************************************/

// # Print My Name in 10 Times
for (var i = 0; i < 10; i++) {
  console.log(i + 1 + ". " + " sAiFuL bAppy");
}

//  # Print Sum of 1 To 10
var sum = 0;
for (var i = 1; i <= 10; i++) {
  console.log(sum + " + " + i + " = " + (sum + i));
  sum = sum + i;
}
console.log("result = " + sum);

// # Print All Odd Number in 1 To 10
for (var i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// # Print Sum of Even Number in 1 To 10
var sum = 0;
for (var i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
    console.log(sum + " = " + (sum - i) + " + " + i);
  }
}
console.log("result = " + sum);

//  # For Loop Run With Array
var nums = ["bAppY", "Saiada", "Naim", "Safiya", "Tabia", "Siam"];

for (var i = 0; i < nums.length; i++) {
  var element = nums[i];
  console.log(element);
}
