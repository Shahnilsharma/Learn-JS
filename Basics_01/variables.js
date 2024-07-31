/* variables are like containers or boxes which store data 
 we declare variables by any name you like its suggested that always use relaatable name, 
 in java script we can declare either using keywords or u can also declare by just giving it a name but its not a good practice*/

const userName ="shahnil"; // const is for constant variables of which have constant values
// userName="sharma";  //not allowed
// userName is a camelcase convention of naming variables u can name variables by using other conevntion like adding - or _ but thee should be no space

let age=22; // use let keyword to declare variables when u dont want to creat constant variables
age=23;
var date="31/07/2024"; // its recommended that never use let cuz it creates issue in block scope and functional scope

profession='student'; //not prefered

let habbits; //if u dont assign values to variables they are undefined

console.log(date);

console.table([userName,age,profession,date,habbits]);
//console.table is also used to show data on console but in a tabular form with indexing
