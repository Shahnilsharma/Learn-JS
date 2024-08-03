/* Destructuring is a technique that allows you to unpack values
 from arrays or objects and assign them to separate variables. 
 It’s like opening a treasure chest and distributing the gems
  inside to different pockets.*/


  //Destructuring Objects
  let person={
    name:'Abraham',
    age:24,
    address:{
        country:'Pakistan',
        city:'Karachi',
        area:'Gulshan'
    }
  };
  
  /*without destructuring we need to acces values like
  console.log(person.name);
    console.log(person.age);*/

    //but with destructuring

    let {name,age:recentAge}=person;  //right side of = should be name of object in braces u give properties also give them names accordingl using ':'
    console.log(name); //now just use the object element
    console.log(recentAge); //the name u gave to the element

    //we can also destructure nested objects
    let {address:{country,area}} =person;
    console.log(country);
    console.log(area);


    //Application Programming Interfaces (APIs) are like magical bridges that connect different parts of the software world

// in javascript Apis's are like objects or arrays but wthout any name 
// in json(JavaScript Object Notation) format 
// {
//     'name':'santosh',    
//     "age":"25"
// }
//this is an api each property should in "" quaotations