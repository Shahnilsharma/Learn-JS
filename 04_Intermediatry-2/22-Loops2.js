     // 'while' loop
        // what if you dont know the exact number of times you have to run your loop
        // or you cant be specific for a loop to run then we use 'while' loop
        //we give a condition which will keep the loop running till its satisfied

        // while (condition){}  //while loop syntex

        // lets say you need to put a condtional loop on a login page 

        let password='123';
        while(password!='1234'){
             console.log('Incorrect Password ');
             break; //to terminate the loop 
        }
        console.log('\n'); //to give a gap 

// do while loop 
// the difference between while and do while loop is that while loop first checks the condition
// and then executes the code but do while loop first executes the code and then checks the condition

// ever heard of brute force?
// lets say you have to crack a password and you dont know the exact password
// you can use a do while loop to keep trying all the possible passwords till you get the right one this is called brute force 

let passwordGuess=0;
let realPassword=11;  //thats why you are reccomended to use stronh alphnumeric passwords

do{
    console.log(`${passwordGuess} is the wrong password`);
    passwordGuess++
} while(passwordGuess!=realPassword);
console.log('Unlocked ');
//congrats youa are now a hacker  :O
console.log('\n');

// 'for of' loop
// when you dont want to give any condition or just 
// wants to run a loop on any object(not only a js object)
// it could be varibales, array, string etc

// for (const element of object) {}  //'for of' syntex

// lets print each character ina  string 
const myName="shahnil";   
for (const name  of myName) {   //the variable name here works as a counter
     console.log(`character: ${name} `);
}
console.log('\n');

//maps 
// maps it self an object
// The map object holds unique key-value pairs and remembers the original
// insertion order of the keys. Any value (both objects and primitive values)
// may be used as either a key or a value. they are itterated easily by 'for of' loop

const employees = new Map(); //creting a map
employees.set('01','Nitesh');
employees.set('02','Hitesh');
employees.set('03','Jitesh');  //the order will be the same in which, you add the values 

for(const [key,value] of employees){
     console.log(`Employee Name: ${value} Employee Id: ${key} `);
}
console.log('\n');

//we tried loops on maps but for objects we will use 'for in' loop
//'for in'

const resume = {
     name:'Shahnil',
     age:22,
     profession:'student',
     college:'ZU'
}
for (const key in resume){
     // console.log(key); //if you try to print the key it will just return the key not the value
     // console.log(resume[key]); //to get the value you have to pass the key to the object
     
     console.log(`Applicant's ${key} is ${resume[key]} `);

}
console.log('\n');
