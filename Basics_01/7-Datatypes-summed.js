/* in js datattypes are divided into primitive and non primitive datatypes 
based on how they are allocated memory and how they are accesed

primitive = call by value
7 type: String, Number , Boolean , BigInt , Symbol , null, undefined
*/

//symbol is used for unique datatypes
let id =Symbol('123');
let anotherId = Symbol('123');
//althought both variables have same value but due to symbol they are treated as unique
console.log(id===anotherId);

/*
non primitive = call by reference 
Array, Objects, Functions (their data type is object for function its called object function)
*/
let colors=["Red","blue","green"]; //array
 
let company={
    Name:"xyz",
    adress:'xyz street',
    netWorth:12001,
}  //object

let Greetings = function(){
    console.log("Hello there");
};//function
Greetings();//function call

// checking datatypes of nonprimitive 
console.log(typeof colors);//object
console.log(typeof company);//object
console.log(typeof Greetings);//function object