//Scope in js {}
// let and const are block scoped
// var is function scoped - its is prefered not to use var 
//for example
// {}-> these curly brases ae the scope
 function Scope() { 
    let number1=20;
    const number2=30;
    var number3=40;

    // console.log(number1);//this is inner call so it will execute for let or const 
  }

//    console.log(number1); //this will give an error because it keeps the data inside the scope
//    console.log(number2); //this will give an error because it keeps the data inside the scope
    console.log(number3);  // this is a variable declared with var which sort of leaks the data 
