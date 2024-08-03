/* singletons
 restricts the instantiation of a class to one single instance. This is useful when exactly one object is needed to coordinate actions across the system. 
 
 Object.create //this how u create a singleton object
 
 */
//Literals -> u assign some fixed values to your literal objects
const person = {
	name: "Sara",   
    'full name':'Sara white',
	age: 25,
    isAdult:true,
    hobbies:['reading','music'],      
}; 
/*
name,age,isAdult,hobbies  all are variables and in objects you dont need
to use let or const to declare them, can be of any datatype, just give their  name and assign their value
by using a ':' colon instead of '=' also make sure all variables are seperated by ',' 
*/

// to access objects you can use 2 methods but the square bracket method is prefered 

//dot method 
console.log(person.name); //but with this method u cant acccess the full name
// console.log(person.full name); throws error

//square bracket method
console.log(person['full name']); //this is how u access the full name
console.log(person['age']); //u can access all variables as well

// how to add a symbol datatype into any object 

let mySym=Symbol('Key1');
let mySym2=Symbol('Key2');

const unlock ={
    mySym: "101", //its the wrong approcah because it gives u a string data type
    [mySym2]: "101", //this is the correct approach
} 

// to access the symbol
console.log(unlock.mySym); //this will give u a string data type if u access symbol like this
console.log(typeof unlock.mySym);

console.log(unlock[mySym2]);  // no need of quoations here its acccess directly
console.log(unlock);   //here you wil see that mysym2 is a symbol

// we cana lso change the values of the variables inside of an object
person.name='John'; //this is how u change the value of a variable inside an object
console.log(person.name);
//but if u freeze the object u cant change the values 
Object.freeze(person);
person.name='Sara';
console.log(person.name); //this will still print John 

let Person2={
    name:'Simon',
    greet:function(){
        console.log(''); //u can add functions into obj because in js functions too are treated as variables 
    }
}

console.log(Person2.greet); //this will act as an function type 
// console.log(typeof Person2.greet);
console.log(Person2.greet()); // this will execute the code inthe function 
// console.log(typeof Person2.greet());

//we can add objects in objects by nesting them

let Facebook ={
    name:'Azam',
    age:29,
    address:{
        country1:{
            name:'pakistan',
            city:'Karachi',
            area:'Gulshan'
        },
        country2:{
            name:'Canada',
            city:'Toronto',
            area:'Scarborough' 
        }
    }
}

console.log(Facebook.address.country2.name); 

//merging objects 
 let obj1={
        name:'Ali',
        age:25
 }
 let obj2={
        city:'Karachi',
        are:'Johar'
 }
 let obj3 = Object.assign({},obj1,obj2);//this will merge both objects and make a single obj 
 // we add '{}' in assign at starting because sometimes we need to add more objects so this keeps them in the same scope else its not compulsory to use
 console.log(obj3); 

    //another method to merge objects is using the spread operator
    const personalInfo={
        name:'AMeen',
        age:20
    }

 const educationDetails={
        degree:'BSCS',
        year:2020,
        institution:'MUET'
 }

 const profile={...personalInfo,...educationDetails};
    console.log(profile);
    //this method is prefered

    // sometimes working with databases we get objects in the form of array 
    const User=[{
        name:'Ali',
        age:25
    },{
        name:'Sara',
        age:30
    },{
        name:'John',
        age:35
    }];
    
    // to get these objects as we get array elements
    console.log(User[1].age);

    //to get all the object keys,values or entries 
    console.log(Object.keys(profile)); //this will give u all the keys of the object   
    console.log(Object.values(profile)); //this will give u all the values of the variables
    console.log(Object.values(profile)); //this will give u all the values of the variables
    console.log(Object.entries(profile)); //this will give u all the keys and values of the object   


     console.log(User.hasOwnProperty('status'));
     console.log(profile.hasOwnProperty('name'));