// Immediatly invoked function execution(IIFE)
// IIFE is a function that is executed right after it is created
// IIFE is used to avoid polluting the global scope

(function() {
    console.log('Basic IIFE');
})(); 
//this will execute the function without calling it explicitly
//this is the basic syntax of IIFE
// ()() 
//first parenthesis is for function execution and the other is function call    

(()=>{
    console.log('Arrow IIFE');
})(); 


//IIFE with arguments
//you can pass arguments in the second parenthesis
    
    ((a,b)=>{
        console.log(a+b);
    })(2,3);