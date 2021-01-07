// # Chapter Three
/**********************************************************************************
 # How to use "else" condition in javaScript
 
    else { If "if" condition is false then execute "else" statement.
            statement
    }
**********************************************************************************/

var a = 100
var b = 60

// a > b true or false

if (a > b) {
    console.log("A is greater than B")
} else {
    console.log("A is less than B")
}

// To check even or odd number

var n = 55

// double equal (==) comparative oparator (to return boolean value true or false)
if (n % 2 == 0) {
    console.log(n + ' is Even Number')
} else {
    console.log(n + ' is Odd Number')
}