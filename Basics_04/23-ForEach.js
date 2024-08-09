// for each
// The forEach method is used to iterate over an array and execute
// a provided function for each element in the array.  
const array = [1, 2, 3, 4, 5];

/* array.forEach()  is the basic syntex of for each in the parenthesis
you have to pass a callback function (functions without name) with a parameter. either
you can make create a function inside the parenthesis or declare it and then execute it 
just take care you call it by reference */
 
array.forEach( function(val) {
   console.log(val);
} );
console.log('\n');
// you can also use arrow functions
array.forEach( (val) => {
    console.log(val);
} );
console.log('\n');
// you can also pass the index and the whole array
array.forEach( (val, index, arr) => {
    console.log(`Value: ${val} Index: ${index} Array: ${arr}`);
} );
console.log('\n');
// you can also use the function by reference

const departments=["Computer Science","Electrical","Mechanical","Civil","Software","Chemical"];
function printDepartment(dep){
    console.log(dep);
}
console.log('\n');

departments.forEach(printDepartment); //we didnt use the '()' for function call because
                                       // we are calling the function by refernece

                                       
//to access each element seperatly of a complex object structure inside a array becaomes a headache but using foreach method its a piece of cake

const residences =[
    {
      country: 'pakistan',
      city: 'karachi',
      area: 'FB Area'
    },
    {
      country : 'india',
        city: 'mumbai',
        area: 'bandra'
    },
    {
      country: 'usa',
      city: 'new york',
      area: 'manhattan'
    }
];

residences.forEach( (item)=>{   //the item parameter transverse every element in the array
    console.log(item.city);     //this returns all the cities value in the objects 
} );



