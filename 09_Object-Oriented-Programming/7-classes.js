// A class is a blueprint or a template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of that class will have. In JavaScript, classes are introduced in ECMAScript 2015 (ES6) and provide a more structured way to define objects.
 

class Person {
    //when ever we create an object with the class name the constructor 
    //is called itself implicitly the args are passed via class name to
    //the constructor
    constructor(name, age)
     {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// In this example, the Person class has two properties: name and age. The constructor method is a special method that is called when an object is created from the class. It initializes the object's properties. The sayHello method is a behavior of the Person class, which logs a greeting message to the console.

// Objects: An object is an instance of a class. It represents a specific entity or concept based on the class blueprint. Objects have their own unique set of property values, which are defined by the class.
const person1 = new Person("Shahnil", 25); //person1 is now an object of the Person class
const person2 = new Person("Sam", 30);

person1.sayHello(); // Output: Hello, my name is Alice and I am 25 years old.
person2.sayHello(); // Output: Hello, my name is Bob and I am 30 years old.
// To create an object from a class, you use the new keyword followed by the class name and any required arguments for the constructor. Here's an example: