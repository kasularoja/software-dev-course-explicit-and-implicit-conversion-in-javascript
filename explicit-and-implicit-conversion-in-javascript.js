/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/






let result = Number("5") - 2; // Fixed the result of the subtraction to ensure the correct type (number).
console.log("The result is: " + result); // "The result is: 3" will be logged
let isValid = Boolean("false"); // This converts "false" to true, but the string 'false' is a truthy value.
if (isValid) {
    console.log("This is valid!"); // This will be logged, since the string 'false' is truthy.
}
let age = "25"; // age is a string
let totalAge = age + 5; // JavaScript implicitly converts the number 5 to a string and concatenates
console.log("Total Age: " + totalAge); // "Total Age: 255" will be logged because the number is coerced into a string
let strValue = "123abc"; // Invalid string for number conversion
let numValue = Number(strValue); // Explicitly convert the string to a number
console.log("Converted value:", numValue); // NaN will be logged because the string cannot be converted to a valid number

let validString = "456"; // A valid string that represents a number
let validNumber = Number(validString); // Explicitly convert the string to a number
console.log("Converted number:", validNumber); // 456 will be logged

let undefinedValue; // 'undefined' value
let booleanValue = Boolean(undefinedValue); // Explicitly convert undefined to a boolean
console.log("Converted boolean value:", booleanValue); // false will be logged, since undefined is falsy
let nullValue = null;
let booleanFromNull = Boolean(nullValue); // Explicitly convert null to a boolean
console.log("Boolean from null:", booleanFromNull); // false will be logged, because null is falsy

let nanValue = NaN;
let stringFromNaN = String(nanValue); // Explicitly convert NaN to a string
console.log("String from NaN:", stringFromNaN); // "NaN" will be logged, because NaN is coerced into the string "NaN"


