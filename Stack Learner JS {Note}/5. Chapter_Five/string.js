// # Chapter Five
/*******************************************************************************
# String in JavaScript
 # What is String
    JavaScript strings are used for storing and manipulating text. 
    A JavaScript string is zero or more characters written inside quotes.
********************************************************************************/
// String Litaral
var string1 = "A string primitive";
var string2 = "Also a string primitive";
var string3 = `Yet another string primitive`;
/******************************************************** 
Strings can be created as primitives, from string literals, 
or as objects, using the String() constructor:
*********************************************************/
var number = 10;
var string = String(number);

// Escape Notation
// var srt = 'This is a \'String\''

var str = "This is a \nString";
console.log(str);

var str = "This is a \tString";
console.log(str);

var str = "This is a \\String";
console.log(str);
// And more - Carriage Return \r, Vertical Tab \v, Backspace \b, Form Feed \f

// Comparison Between Two String
var a = "abc";
var b = "bcd";
console.log(a == b);
console.log(a > b);
console.log(a < b);

// JavaScript Uses Lexicographic System to Compare to String
// Lexical Order - z,y,x...a | Z,Y,X...A
console.log("z" > "Z");
console.log("a" > "Z");

// Comparison String-Number to Number == Number
console.log("001" == 1);

// JavaScript Built in String Methods
// concat() Method
var x = "I am";
var y = " sAiFuL bAppY";

var z = x.concat(y);
console.log(z);

// subsrt() Method
var m = z.substr(12);
console.log(m);

var n = z.substr(12, 3);
console.log(n);

// Check The Character At (0) To Any Kind of Number
console.log(z.charAt(13));

// Check startsWith and endsWith
console.log(z.startsWith("sAiFuL"));
console.log(z.endsWith("bAppY"));

// Trim Methods
console.log("        What are you doing, please trim it....         ".trim());

// Split Methods
console.log(z.split(" "));

// Get Length of a String
var str = "Some String";
var length = 0;

while (true) {
  if (str.charAt(length) == "") {
    break;
  } else {
    length++;
  }
}
console.log(length);

/************* Output ***************/
bappy@bAppY MINGW64 JavaScript-Note/Stack Learner JS {Note}/5. Chapter_Five (main)       
$ node string.js
This is a 
String
This is a       String
This is a \String
false
false
true
true
true
true
I am sAiFuL bAppY
bAppY
bAp
A
false
true
What are you doing, please trim it....
[ 'I', 'am', 'sAiFuL', 'bAppY' ]
11