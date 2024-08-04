// when we need to encapsulate a specif task, say i want to execute multiple lines 
// when ever i want by just calling one line. There we use functions

function Random() {                  
    console.log("My name is Function");
    console.log(`my age is ${1+2}`);
    console.log(2**4);
  }

Random(); //this will execute the code in the function 
    // to execute the code inside the function you have to call 
    // the function by its name and paranthesis 

// function with parameters and arguments
function Sum(number1,number2){   
    console.log(number1+number2);
}
//this function is with 2 parameters of 2 numbers 
Sum(5,6); //this will execute the code in the function and print the sum of the arguments (5,6) we passed

// function with return statement
function Sum2(number1,number2){  
    // let result=number1+number2;
    // return result;  
    return number1+number2;
    console.log("wont work"); //what ever write after return inside a function wont work
}
 //in the above function we have returned the valued it doesnt mean that it will
//  also show the result on the screen for tha we have to seperatly use console.log
function LogIn(username) {
    return `You are loged in ${username}`
  }
  LogIn("Ramais");//this wont show the output to the console because
                  //we have just used the return statment we havent used console.log anywhere
// so to print this 
console.log(LogIn("Ramais")); //this will print the output to the console


// function with default parameters
function Sum3(number1=0,number2=0){  
    console.log(number1+number2);
}
//you can also keep some default values if the arguments are not passed while 
// calling the default value wil be passed or else it will give an undefined value
Sum3(5); //this will print 5+0=5