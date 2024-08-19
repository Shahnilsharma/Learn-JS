// this keyword refers to the current context
const profile={
    name:"shahnil",
    age:22,
    hello:function greet() {
        console.log(this.name);// here "this refers the context of user"
       console.log(this);//this gives the whole context of the function greet
      }
}
// console.log(profile.hello); //[Function: greet]
profile.hello();

console.log(this);//its an empty object when run in node environment but in browser it
                     //gives you the window object


//arrow function

const print =function (){
    let id=1001;
    console.log(this.id);//but for functions its like an empty object now '{}'
                         //its the same for the arrow functions too
}

// print();

//'() => {}'this is the syntex of arrow function

const anotherPrint = () => {
    let id=1002;
    console.log(this.id);
}

// anotherPrint();


//basic arrow function
//explicit return

const sum = (a,b) =>{
    return a+b;
}
console.log(sum(4,5));

// implicit return arow function

const sum2 = (a,b) => (a+b); //when u add curly braces u need to write return
const sum3 = (a,b) => a+b; //this is the same function but in just one line

console.log(sum2(2,3));

console.log(sum3(3,3));

//returning objects

// const person = () => {name:"shahnil",age:'22'}; //this wont work because you have to use parenthesis when using curly braces ie objects
const person = () => ({name:"shahnil",age:'22'}); //parenthesis automatically cretes a block

console.log(person()); 