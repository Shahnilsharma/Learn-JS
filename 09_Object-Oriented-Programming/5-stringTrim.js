//lets make a small program to give the exact length of any string if there are extra spaces
let string1='count'
let string2='count     '
//checking length of both strings
console.log(string1.length); //5
console.log(string2.length); //10

//now lets get the original length by using trim or truelegth
console.log(string2.trim().length); //5 but what if we have many strings we cant do this for each string


//so lets make a prototype to do this for us
String.prototype.exactLength=function(){
    console.log(`${this}`);
    console.log(`exact length is ${this.trim().length}`); //this refernecs to whoever calls it
}

console.log('\n');
// now lets take multiple strings 
let string3='four     '
let string4='people       '
//now we can call the function on each string
string3.exactLength(); //output: exact length is 4
string4.exactLength(); //output: exact length is 6