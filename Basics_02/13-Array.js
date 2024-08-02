// array are containers in which we can store data of multiple data types 

let array = [1,2,4,5,6];
let array2=[99,true,`speed`];
let movies = new Array(`Avengers`,`Spiderman`,`Thor`)
console.log(array);

console.log(array2[1]);//to acces your array -> this means u want
// to access element on index 1 in array2 which is a true(boolean) value

console.log(movies);

// array methods

array.push(7) //inserts value in the end
array.push( 8)
console.log(array);
array.pop(); //deletes last element of array
console.log(array);
array.unshift(5);//adds in start
console.log(array);
array.shift();//removes from start
console.log(array);

console.log(array.includes(4)); //finds if the element is present in the array or not
console.log(array.indexOf(2)); //returns the element present on the given index

let newArr = array.join();//converts array to string
console.log(array);
console.log(newArr);
// console.log(typeof newArr);

let evenNumbers = [2,4,6,8,10,12,14,16];

// slice
console.log(`A`, evenNumbers);
console.log(`b`,evenNumbers.slice(1,5));//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

// splice 
console.log(`A`,evenNumbers);
console.log(`C`, evenNumbers.splice(1,5));

//to join 2 or more arrays
 
let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
arr1.push(arr2);
console.log(arr1);//this just pushs the whole array as an single element

//[ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]

// another method is concat 
let arr3=[1,2,3,4,5];
let arr4=[6,7,8,9,10];
let arr5 = arr3.concat(arr4);
console.log(arr5);//this is just a simple concatination of 2 arrays cany add another into the same

// another method which is prefer is the split method 

let splitedArray = [...arr3, ...arr4]//we can add more than 2 arrays  using split method

console.log(splitedArray);

//when u have nested array and u want to merge all elements into one array 

let nestedArray=[1,2,3,[4,5,6],[7,8,9,[10,11,12]]];
console.log(nestedArray.flat(Infinity)); //this bring all the elements to single array



console.log(Array.isArray(`Daniel`));//check ifthis array is intitated
console.log(Array.from(`Daniel`));//creates an array 


//merging simple variables values to form array

let firstName = `Miss`;
let middleName = `Sarah`;
let lastName = `Simon`;
console.log(Array.of(firstName,middleName,lastName));


