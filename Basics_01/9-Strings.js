/*its better to use backticks `` when codind woth strings because
they use string interpolation this means u can access aur update variables
within a string */

let Name=`Sara`;
let age=23;

console.log(`My name is ${Name} and my age is ${age}`);

// now we will see some methods of string by creating an object of string

let myName = new String(`Shahnil-S`);
//new keyword is use to create an instance
console.log(myName.length);//length will give the total number of character in a string
console.log(myName.toUpperCase());//converts all char to uppercase letters
console.log(myName.charAt(`3`));//returns character on the index of the string
console.log(myName.indexOf(`n`));//returns index of that character in the string


console.log(myName.substring(1,5)); //it returns chars from index satrting to the last index -1 passed in parameter
console.log(myName.slice(-8,5));//when u want to start from a negative index 

 
// suppose your user inputs a string field with extra spaces then u might need to use trim 

let newString = `    _team   `;
console.log(newString);
console.log(newString.trim()); //this removes all the unnecessary spaces

// sometimes browsers provide values liek %20 in betweeen url to mitagate spaces 
let url = `https://www.linkedin/in/shahnil%20sharma`;

console.log(url.replace(`%20`,`-`)); //this will replace that character and put the desired char

console.log(url.includes(`link`));//checks if this string is presnt or not

console.log(url.split(`/`));// returns all strings in array with the cahr defined