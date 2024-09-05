//well by now you may have get the idea of how function scope works
//the default behavior of function scopping is termed to lexical scoping

function init() {
    
  let name = "Scoob";
    
   function display() {
       
       let sound = "Dooo"
       console.log(name);
     }
    //  console.log(sound); //this wll give an error because we cant acces any property outside that function
     display();
  }
//the name propery of init function is accessible to the function dispay which is inside the init
  init();
  //this is basically the same  what we did in global and state scope
  //but here we are using function scope to achieve the same thing
  //the main difference here is that we are using a function to encapsulate the data

//closure 
  //   closure is a function that has access to its outer function's scope even when the outer function
//   has returned. This is why it is called a closure. 
function insider() {
  let name = "Scoob";
  
  function inner() {
    console.log(name);
  }
  // Return the 'inner' function 
  return inner;
}

let closure= insider();//here we get the whole lexical scope of this function

closure();

// even though the insider()  function has finished executing, the inner() function still has access 
//  to the name variable. This is because of  "lexical closure".
//   The inner() function "closes over" the name variable and retains access to it 
//   even after the insider() function has finished executing.

//   it allows functions to retain access to variables from their parent scope,
//    even when the parent scope is no longer active. It can be useful in 
//    situations where you want to create functions that remember certain 
//    values or have access to variables from an outer scope.