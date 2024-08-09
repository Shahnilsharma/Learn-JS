// lets say you need to print a name 100 times are you going to do it manually?
// for this type of problems we use iterations or loops
// there is a 'for' loop and a 'while' loop  and a 'do while' loop and a 'for of' etc

// 'for' Loop 
// when you know the exact how many times you have to run any loop you have to use for loop 

for (let initial = 0; initial <= 10; initial++) {
    console.log("Heyaaa \n") // '\n' is just a decorator which gives one line space     
}
// here  this loop will print a greet message 10 times 

// this is the basic syntex of 'for' loop first you declare an initializer
// then comes the condition which you has to be met to be in the loop
// and then the iterator which keeps the loop running 

// nested for loop 
// you can also run a loop inside a loop 
for (let i = 0; i < 3; i++) {
    console.log("Outer loop", i)
    for (let j = 0; j < 3; j++) {
        console.log("\n Inner loop", j)
    }
}
// this will print the outer loop 3 times and inner loop 3 times for each outer loop
// for each increament of first/ outer loop which has initializer i the whole inner loop will
// execute like if i is one the j will go 1,2,3 then if i reaches 2 again j will b 1,2,3

// lets print all the values inside an array one by one using for loop 
const arr = ["apple", "banana", "cherry", "date", "elderberry"]
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// break and continue
// when we have to stop a loop in between even if the condition meets then we use break 
for(let i=0;i<=10;i++){
    if(i==5){
        break      //the break function stops the loop from executing further
    }
    console.log(`\n value of i is ${i}`);
}


//to avoid certain conditions to meet we use continue 
for(let i=0;i<=10;i++){
    if(i==5){
        continue; //this will skip the number 5
    }
    console.log(`\n value of i is ${i} \n`);
}

        
   