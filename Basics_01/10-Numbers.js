let Num1=1200;
console.log(Num1);//implicitly converts to number 

let Num2 = new Number(1300); //explicitly converted to number
console.log(Num2);

console.log(Num2.toString().length);//now your number is a string and all operations of strings can be implemented

console.log(Num1.toFixed(`2`));//it fixes the number to the decimal places passed in paramenter

let Num3 = 1982.2939;

console.log(Num3.toPrecision(`5`));//this will round off the exter decimal value to the number of figures defined in parameter

// suppose there are too much zeros and you feel actic counting them 
let bigNumber = 1000000000;
console.log(bigNumber.toLocaleString());//this adds , between zeros



