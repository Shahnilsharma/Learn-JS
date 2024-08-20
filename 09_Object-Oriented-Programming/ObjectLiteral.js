// OOP stands for Object-Oriented Programming. It is a programming paradigm that organizes code into objects, which are instances of classes. Objects encapsulate data (attributes) and behavior (methods) into a single entity.

//objects literals
//used /explain (rerun without)
// Object literals are a way to define and create objects
//  in JavaScript. They allow you to define key-value pairs within curly braces {}
const profile={
    name:'shahnil',
    age:13,
    displayName:function(){
        // console.log(`name : ${name}`); //it neccessary to give context of the variable
                                          //you are accessing thats why we use 'this' keyword
        console.log(`name : ${this.name}`);//its the right to access contextual values                            
    }
}
console.log(profile.age);
console.log(profile.displayName());
