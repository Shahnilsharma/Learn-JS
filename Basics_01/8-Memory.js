/*
there are 2 types of memory in JS
stack for primitive datatypes and heap for no primitive
stack is like a layer on another layer and heap is like a conatiner 
*/

//stack(primitive - call by value = they give u the copy)
let user1="amber";

let user2=user1;
 user2="shahnil"; //updated and added to the stack

console.log(user1);
console.log(user2);//it will return the value which is on top of the stack

// heap(nonprimitive - call by reference = they give the original stored values )

let Brand1={
    Name: "gucci",
    item1:"belt",
    item2:"purse",
}

let Brand2=Brand1;

Brand2.item1="pants"; //objects are accessed by dot notation
//well if was in a stack only Brand2.item should give panst in output when accesed

console.log(Brand1.item1);
console.log(Brand2.item1); 
//but this outputs pants for both because they are getting original value which was accesed by brand2 thats why its a heap memory