// # Chapter Three
/**********************************************************************************
 # How to use "if" condition in javaScript
 
    if (condition) { If "if" condition is true then execute "if" statement.
            statement
    }
**********************************************************************************/

var a = 40
var b = 60

// a > b true or false

if (a > b) {
    console.log("A is greater than B")
}

if (a < b) {
    console.log("A is less than B")
}

// To check even or odd number

var n = 50

// double equal (==) comparative oparator (to return boolean value true or false)
if (n % 2 == 0) {
    console.log(n + ' is Even Number')
}

if (n % 2 == 1){
    console.log(n + ' is Odd Number')
}