// # Chapter Three
/**********************************************************************************
 # How to use "Ternary Oparator" in javaScript

    JavaScript also contains a conditional operator that assigns a value to 
    a variable based on some condition.
    
    Syntax
        variablename = (condition) ? value1:value2 

**********************************************************************************/
// Multi Line Code Use by "if" "else"
var n = 10 
var str = ""

if (n % 2 == 0) {
    str = "EVEN"
} else {
    str = "ODD"
}

console.log(str)

// One Line Code Use by Ternary Oparator. Syntax.... (variablename = (condition) ? value1:value2 )

x = 49

var result = (x % 2 == 0) ? "EVEN" : "ODD"
console.log(result)