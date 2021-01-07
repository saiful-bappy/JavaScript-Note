// # Chapter_Two
/**********************************************************************************
 1. primitive datatypes {(primitive datatypes are defined by javascript)}
_________________________________________________________________________
    i.      Number 
                10 4.5 8.12 3.14
    ii.     String 
                'This is a text' + "This is also text"
    iii.    Boolean
                true or false
    iv.     Undefined
    v.      Null  
__________________________________________________________________________
__________________________________________________________________________

 2. object datatypes {(object datatypes are user defined data type)}
__________________________________________________________________________
    i.      Array
    ii.     Object
    iii.    Funtion
**********************************************************************************/

/*************** 1. primitive datatypes ****************/
//      i. Number
var i_n = 1451;
var f_n = 3.24;

var nn = Number('45.99');
console.log(nn);
console.log(Number.parseInt(nn));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(1 / 0);
console.log('ABC' * 10);

var hex = 0xff;
console.log(hex);

var oct = 0756;
console.log(oct);

//      ii. String
var str = 'String';
var str2 = "String";
var str3 = `String`;

var str4 = String('bAppY');
var str5 = String(0172);
var str6 = String(3.1416);

console.log(str4, str5, str6);

//      iii. Boolean
var b1 = true;
var b2 = false;

var b3 = Boolean(true);
var b4 = Boolean(false);

console.log(b3, b4);

//      iv/v. Undefined Vs Null
var abc = null;
var xyz;

console.log(abc);
console.log(xyz);