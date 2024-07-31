//first of we will create an instance of date
let date = new Date();
console.log(date);//to make the format readable we will convert it to string
console.log(date.toString());
//other methods to convert date
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.getMonth()+1);
console.log(date.getDay());

// we can also create or customize date date 

let createdDate = new Date(2004,0,19);//months start fro 0- jan
// let createdDate = new Date(`19-01-2004`);
console.log(createdDate.toLocaleDateString());
let cretedNew = new Date(2009,3,6,10,12);//can get time in minutes and hours
console.log(cretedNew.toLocaleString());

// if u want exact time stamp 
console.log(cretedNew.getTime());

let timeNow =  Date.now(); //this is not a object we wont use new
// console.log(typeof timeNow);
console.log(timeNow);

// console.log(Math.floor(Date.now()/1000)); //from  milliseconds to micro



