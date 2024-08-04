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


//lets say you want a function which might pass 2 parameters ,
//  which also might pass 10 parameters then we need rest operator "..."
// rest operator also called spread operator depending on its functionality
function GetIds(...rest) {
    return Id;
  }
    console.log(GetIds(1,2,3,4,5,6,7)); //this will print all the arguments passed in the function
    //using rest is a convention we can give any name to the parameters with ...

    //objects with functions
let profile={
    userName:'Ashish',
    Id:"1N9M"
}
let {userName,Id}=profile; //now u dont need to acces objects using dot notation
function GetProfile({}) {
    return `Name: ${userName}, Id: ${Id}`;
  }
 console.log(GetProfile(profile)); //this will print the profile object
console.log({
    userName:"Saleem",
    Id:"2020NM"
}); 
// we can also pass the whole object directly as an argument
 
// Array with functions
let arr=[1,2,3,4,5,6,7,8,9,10];

function GetArray(anyArray) {
    return anyArray[2];
  }
console.log(GetArray(arr)); //this will print the 3rd element of the array on index 2
