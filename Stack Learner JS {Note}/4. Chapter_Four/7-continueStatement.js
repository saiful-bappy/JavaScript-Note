// # Chapter Four
/*****************************************************************************
# What is Continue Statement?
    The continue statement is used to skip the current iteration of the loop 
    and the control flow of the program goes to the next iteration.
*******************************************************************************/

/************************
In a for loop, continue skips the current iteration and control flow jumps to 
the updateExpression.
*************************/

for (var i = 0; i <= 10; i++) {
  if (i == 3 || i == 9) {
    continue;
  } else {
    console.log(i);
  }
}
