// # Chapter Three
/**********************************************************************************
 # How to use "elseif" condition in javaScript
 
    else if (condition) { If "if" condition and "else if" condition is false then execute "else" statement.
            statement
    }
**********************************************************************************/

var a = 20
var b = 20

// a > b true or false

if (a > b) {
    console.log("A is greater than B")
} else if (a < b) {
    console.log("A is less than B")
} else {
    console.log('They Both are Same')
}

// To check even or odd or 0 number

var n = 0

// double equal (==) comparative oparator (to return boolean value true or false)
if (n == 0) {
   console.log(n + ' is zero') 
} else if (n % 2 == 0) {
    console.log(n + ' is Even Number')
} else {
    console.log(n + ' is Odd Number')
}