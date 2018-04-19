// String Basics

// Creating strings
var string1 = 'This is a string';
console.log(string1);

var string2 = 'This is an other string';
console.log(string2);

var string3 = "My name is 'Shahriar'";
console.log(string3);

var string4 = '"JavaScript" is a fun stuff';
console.log(string4);

var string5 = "I love \"Coding\"";
console.log(string5);

var string5 = "This is Shahriar\'s account";
console.log(string5);

// String concatenation
var string1 = "Hello" + " " + "World";
console.log(string1);

var string1 = "Hello ";
var string2 = "World";
var string3 = string1 + string2;
console.log(string3);

// Type of string
var string1 = "String";
console.log(typeof(string1));

var string1 = new String("String");
console.log(typeof (string1));

// String Operations
var string1 = "String";
var string2 = new String("String");
var result = (string1 == string2);
console.log(result); // true

var string1 = "String";
var string2 = new String("String");
var result = (string1 === string2);
console.log(result); // false

var string1 = new String("String");;
var string2 = new String("String");
var result = (string1 == string2);
console.log(result); // false

var string1 = new String("String");;
var string2 = new String("String");
var result = (string1 === string2);
console.log(result); // false