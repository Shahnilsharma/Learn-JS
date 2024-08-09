let Name="amber";
console.log(typeof Name);
console.log(typeof Number(Name));//use the name of that  data type and pass the varaible as a paremter it will be converted to that data type

console.log(typeof Boolean(Name));

console.log(typeof Symbol(Name));

let age=23;
console.log(typeof String(age));

/* there is anoter datatype whcih NaN(not any number) for example if u are converting 
any string into number which also contains other charcters instead of numbers u will get a NaN*/

console.log(Number(Name));//NaN

/*
lets convert different datatype into number 
"33"=>33
"33abc"=>NaN
true=>1
false=>0

*/

let isloggedIn=0;//false
let notloggedIn=2;//true if its not 0
console.log(Boolean(isloggedIn));
console.log(Boolean(notloggedIn));

