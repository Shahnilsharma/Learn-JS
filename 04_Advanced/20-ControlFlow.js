// Control flow refers to the order in which statements are executed in a program
// Control flow statements are used to control the flow of the program
// Control flow statements include if, else, else if, switch, for, while, do while, break, continue, etc.

// if
// if statement is used to execute a block of code if a condition is true
const isUserLoggedIn = true;
const temperature = 41;

// Check if temperature is less than 50
if (temperature < 50) {
    console.log("Temperature is less than 50");
} else {
    console.log("Temperature is greater than or equal to 50");
}

console.log("Execute");

// Comparison operators: <, >, <=, >=, ==, !=, ===, !==

const score = 200;

// Check if score is greater than 100
if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`);
}

// The variable 'power' is not accessible outside the if block
// console.log(`User power: ${power}`);

const balance = 1000;

// Check balance and execute multiple statements
if (balance > 500) console.log("test"), console.log("test2");

// Check balance and execute different statements based on its value
if (balance < 500) {
    console.log("Balance is less than 500");
    
// else if statement is used to execute a block of code if the first condition is false
} else if (balance < 750) {             
    console.log("Balance is less than 750");
} else if (balance < 900) {
    console.log("Balance is less than 900");
// else statement is used to execute a block of code if the condition is false
} else {
    console.log("Balance is greater than or equal to 900");
}
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// Check multiple conditions using logical AND operator
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course");
}


// Check multiple conditions using logical OR operator
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User is logged in");
}


// SWITCH CASE 
// switch statement is used to execute a block of code based on the value of a variable

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// Define a variable 'month' and assign it the value "march"
const month = "march"

// Use a switch statement to check the value of 'month'
switch (month) {
    case "jan":
        console.log("January");
        break;  //this is mnadatory to break of exit from the present case and move to the other
    case "feb":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;

    default:
        console.log("No matching case found");
        break;
}

//Switch cases can be used as integer options too
// Define a variable 'monthnuM' and assign it the value 3
const monthnuM = 3;

// Use a switch statement to check the value of 'monthnuM'
switch (monthnuM) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Invalid month");
        break;
}



//truthy

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
//Falsy values in JavaScript are values that are considered false when encountered in a Boolean context. There are six falsy values in JavaScript. In other words, a value is considered falsy if it coerces to false when used in a boolean context. For example, an empty string is falsy because Boolean('') returns false.

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

// The Nullish Coalescing Operator (??) is a JavaScript operator that allows you to provide a default value when encountering null or undefined values. It checks if the value on the left-hand side of the operator is null or undefined, and if so, it returns the value on the right-hand side. Otherwise, it returns the value on the left-hand side.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator
// it is a short for of if else 

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")