//Scope in js {}
// let and const are block scoped
// var is function scoped - its is prefered not to use var 
//for example
// {}-> these curly brases ae the scope
 function Scope() { 
    let number1=20;   //they are also called state variables 
    const number2=30;  // they cant be accesses outside this function
    var number3=40;
  }
  
  // console.log(number1);//this is inner call so it will execute for let or const 
//    console.log(number1); //this will give an error because it keeps the data inside the scope
//    console.log(number2); //this will give an error because it keeps the data inside the scope
    //console.log(number3);  // this is a variable declared with var which sort of leaks the data 

    // the  variables which we declare inside a scope are called local variales or 
    // belonsg to a local scope in the above function we cant acces these variables out side of
    //of the function because they are local variables they can beaccesed inside only 

    let global=1000; //this variable have a global scope because it can
    //be accessed inside as well as outside other methods too


    function SignUp() {
      let username = "Aroon";        //the username and password are parent variables
      let password = "aroon123";     // they can b access globally inside this function only by 
      //console.log(registerdId); //this wont work
      function LogIn(){              //any child
        let registeredId=101;        //this regesterdId cant be used outside of LogIn inside
        console.log(username)  ;      //signup because parents cant access child variables
      }
      }
//functions and expressiosn 
normalfunction(); // if its a normal function it can be called before function
function normalfunction(){
  console.log("this is a normal function");
}
//normal function can be called by its name

//function expression 
//functionexpression(); //if its a function expression it cant be called before the function
const functionexpression=function(){
  console.log("this is a function expression");
}
functionexpression(); //function expression can be called by its variable name
//function expression can be assigned to a variable
// this is also termed as hoisting 
// hoisting is a process of moving all the declarations to the top of the file
// this is the reason why we can call a normal function before its declaration
// but we cant call a function expression before its declaration
