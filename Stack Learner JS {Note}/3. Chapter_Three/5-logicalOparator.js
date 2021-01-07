// # Chapter Three
/**********************************************************************************
 # How to use "Logical Oparator (&&, //, !)" in javaScript
    Logical operators are used to determine the logic between variables or values.
    
    There are Three types of Logical Oparator...
    Given that x = 6 and y = 3, the table below explains the logical operators:
    _______________________________________________________________________
    |--------------------|------------------|-----------------------------|
    |      Operator      |    Description   |          Example            |
    |--------------------|------------------|-----------------------------|
    |        && 	     |       and 	    | (x < 10 && y > 1) is true   |	
    |        || 	     |       or 	    | (x == 5 || y == 5) is false |	
    |        ! 	         |       not 	    | !(x == y) is true           |
    |____________________|__________________|_____________________________|

    Logical Oparator Only Used When We have Two or More Conditions and Result 
    Comes from both of Their Participation.

**********************************************************************************/

/****************************************************************
    |-----------------------------------------------|
    |                   A && B  (And Oparator)      |
    |-----------------------------------------------|
    |            true && true   =  true             |
    |            true && false  =  false            |
    |            false && true  =  false            |
    |            false && false =  false            |
    |-----------------------------------------------|
    |-----------------------------------------------|
    |                   A || B  (Or Oparator)       |
    |-----------------------------------------------|
    |            true  || true  =  true             |
    |            true  || false =  true             |
    |            false || true  =  true             |
    |            false || false =  false            |
    |-----------------------------------------------|
    |-----------------------------------------------|
    |                  !(a > b)  (Not Oparator)     |
    |-----------------------------------------------|
    | # If defult value is true and use not oparator| 
    |    sign then chance the value and             |
    |    This value will be false                   |
    |                                               |
    | # If defult value is false and use not        |
    |   oparator sign then chance the value and     |
    |   This value will be true                     |
    |-----------------------------------------------|

****************************************************************/



var a = 30 
var b = 20 
var c = 30 
var d = 40



if (a > b && c > d) {
    console.log("A is greater than B And C is greater than D")
} else {
    console.log("At Least One Condition is False")
}

/********************************************************* 
    |-----------------------------------------------|
    |                   A || B  (Or Oparator)       |
    |-----------------------------------------------|
    |            true  || true  =  true             |
    |            true  || false =  true             |
    |            false || true  =  true             |
    |            false || false =  false            |
    |-----------------------------------------------|
    |-----------------------------------------------| 
*********************************************************/
if (a > b || c > d) {
    console.log("A is greater than B Or C is greater than D")
} else {
    console.log("At Least One Condition is False")
}

/*********************************************************
    |-----------------------------------------------|
    |                  !(a > b)  (Not Oparator)     |
    |-----------------------------------------------|
    | # If defult value is true and use not oparator| 
    |    sign then chance the value and             |
    |    This value will be false                   |
    |                                               |
    | # If defult value is false and use not        |
    |   oparator sign then chance the value and     |
    |   This value will be true                     |
    |-----------------------------------------------|
 **********************************************************/

var check = !(a > b)
console.log(check)