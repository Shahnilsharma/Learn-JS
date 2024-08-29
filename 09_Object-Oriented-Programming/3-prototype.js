//in javascript each and every thing references to an object 
//this means if you use any method,vaiable,promiss,array,string etc
//they all in the end referenced as objects 
//if you lo an array in the browser it gives you
//dozens of values along with its parent values
//then the values of parent of that parent and it keeeps going 
//this is called the prototype behavior of javascript(it has prototype of everything youa re working with )


//so this means functions are also objects  
//what do you think this method will return
function sum (num1,num2){
    return num1+num2;
}


console.log(sum(2,4)); //output:6  --this a normal function call and it returns what its asked
console.log(sum);       //output:[Function: sum] --but it says its a function when we called it by reference

sum.power = 4; //we can use a .dot method with it because it returns an object reference
console.log(sum.power);  //output: 4
console.log(sum.prototype); //output: {} --protype method gives you alot of properties and functionalitie
                            //so these empty {} parenthesis gives you the current context of sum() 
                            //any used properties would be returned in these parenthesisi {} 

//in conclusion function is a function as well as an object 

//new and this

function Greetings(message,name){
    // message=message //how does js will decide that which varibale is the argumnet
    this.message= message;
    this.name = name; //for that we use this keyword which gives the context of it current position
}

//lets cretae a prototype of this method

Greetings.prototype.display = function(){
     //when we call the Greetings method multiple times then by using this keyword
     //it will decide whoever called it, it will replace the message of that method
    console.log(`${this.message} Mr.${this.name}`);
}


let greet = new Greetings('Hi','shahnil'); //new creates an object of the function and adds a prototype to it
                                          //which ultimatly reference to the real context of caller function
let greet2 =  Greetings('Hello','Sahil');
greet.display();
// greet2.display(); //this results in error because we havent called its constructor by 'new'

Object.prototype.onTop =function () {
    console.log('This is on top');  
  }

  //oject.prototype is on the top of heirarchy so as we discussed every thing in js is
    // referenced to object on the base level so when we assign the top Node 
    //any value this everything in our js code will have that object property which we set to top
    //the same way you can use string.prototype and arraty.prototype

  greet.onTop(); //output: This is on top
  Greetings.onTop(); //output: This is on top