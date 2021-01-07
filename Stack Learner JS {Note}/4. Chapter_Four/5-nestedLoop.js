// # Chapter Four
/*******************************************************************************
# What is Nasted Loop
  A composition of loops is called a nested loop. The most common type of 
  nested loops will be one loop inside another. The first loop is usually 
  called the outer loop while the second loop is called the inner loop. The 
  outer loop always executes first, and the inner loop executes inside the outer 
  loop each time the outer loop executes once. Take a look at the example below 
  and visualize how the nested loop works.
********************************************************************************/
var n = 5;
for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    console.log(j);
  }
}
// ------------------------------------------------------------------
var n = 5;
for (var i = 1; i <= n; i++) {
  var result = "";
  for (var j = 1; j <= i; j++) {
    result = result + j + " ";
  }
  console.log(result);
}
// ------------------------------------------------------------------
// Same work to given while loop
var n = 5;
var i = 1;
while (i <= n) {
  var result = "";
  var j = 1;
  while (j <= i) {
    result = result + j + " ";
    j++;
  }
  console.log(result);
  i++;
}
// ---------------------------------------------------------------------
var n = 10;
for (var i = 1; i <= n; i++) {
  var result = "";
  for (var j = 1; j <= n; j++) {
    result = result + "* ";
  }
  console.log(result);
}
