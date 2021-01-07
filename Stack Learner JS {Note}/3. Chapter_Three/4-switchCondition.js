// # Chapter Three
/**********************************************************************************
 # How to use "switch" condition in javaScript
    The switch statement is used to perform different actions based on different conditions.
 
    switch (logic/condition) { Use the "switch" statement to select one of many code blocks to be executed.
            statement
    }
**********************************************************************************/

/********************************************************************** 
 The getDay() method returns the weekday as a number between 0 and 6.

    (Sunday=0, Monday=1, Tuesday=2 ..) 
*********************************************************************/
// To Use "else if"

var date = new Date()
var today = date.getDay()

if (today == 0) {
    console.log("Sunday");
} else if (today == 1) {
    console.log("Monday");
} else if (today == 2) {
    console.log("Tuesday");
} else if (today == 3) {
    console.log("Wednesday");
} else if (today == 4) {
    console.log("Thursday");
} else if (today == 5) {
    console.log("Friday");
} else if (today == 6) {
    console.log("Saturday");
} else {
    console.log("Invalid")
}


// To Use "switch"

var date = new Date()
var today = date.getDay()

switch (today) {
    case 0:
        console.log("Sunday")
        break
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    default: console.log("Invalid")
}