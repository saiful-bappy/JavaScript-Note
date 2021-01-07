// # Chapter Four
/*************************************************************************************************************
# How To Use Do While Loop 
# Do While Loop - At least 1st time execute the code though all though conditions is false.
**************************************************************************************************************/

var isRunning = false;

while (isRunning) {
  console.log("I am Running");
} //No execute this code

do {
  console.log("I am Running");
} while (isRunning);
