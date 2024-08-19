/**
 * Promises in JavaScript are a way to handle asynchronous operations. 
 * They represent a value that may not be available yet, but will be resolved in the future.
 * Promises have three states: pending, fulfilled, and rejected.
 * They provide a cleaner and more readable way to write asynchronous code compared to using callbacks.
 * Promises can be chained together using methods like .then() and .catch() to handle success and error cases.
 * They are widely used in modern JavaScript applications for handling asynchronous tasks such as API calls and file operations.
 */

// Example 1
// Creating a Promise as an variable
const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise 1");
        resolve(); // resolve will start consuming the promise

    },1000)
});
// Using .then() to handle the promise
//then() is related with (what do we then, when  the promise is resolved so t)
promise1.then(()=>{
    console.log("promise one is consumed");
    
})

// Example 2
// Creating a Promise as a function

 new Promise((resolve,reject)=>{ //remember to crete an instance using new keyword
        setTimeout(()=>{
            console.log("promise 2");
            resolve();
        },2000)
    }).then(()=>{
        console.log("promise two is consumed");
    });

    // passing params to resolve()
    let promise3 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({name: "Shahnil", age: 23
            });
        },3000);
    })
    promise3.then((user)=>{
        console.log(user);
    })

    //error handling and chaing in promosise

    let promise4 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let error =false;
            if(!error){
                resolve({brand:'Nike', item:'AirForce'});
            }
            else{
                reject("Error: Something went wrong");//throws the error
            }
        },4000)
    });
     promise4.then((product)=>{
        console.log(product);
        return product.item;
     })
     .then((item)=>{  //we are chaining then method here 
                    //because of the asynchronous nature of promises
        console.log(item);
     })
     .catch((error)=>{ //to catch the error
        console.log(error);
     })
     .finally(()=>console.log('The promise is either resolved or rejected'));
     //'finally()' the code inside it will always execute


//async method
    let promise5 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = true;
            if(!error){
                resolve({email:"abc@xyz.com",instagram:"shahnil.py"});
            }
            else{
                 reject("Random database error");
            }
        },4000)
    });

 let promiseResolver = async()=>{
    try {
        let resolve = await promise5; //it takes time to resolve 
                                     //thats why we use await here in async
        console.log(resolve);
    } catch (error) {
        console.log(error);
    }
 }
 promiseResolver();

 


