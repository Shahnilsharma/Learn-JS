//there is common problem while coding in js while using methods
//lets say you create a function inside a function and call that in another funnction
//as we discussed earlier they will get into the stack but on call they 
//leave the stack and the function inside that fucntion is excluded before using its constext

function setUser(username){
    this.username=username;  
}

function setProfile(username,id,pass){
    setUser(username); //apparently we have called but it is called before passing the real context
    this.id=id;
    this.pass=pass;
}

//in this case this refers to global execution context

const val1 = new setProfile("shahnil",'004','1234'); 
console.log(val1);  //output: setProfile { id: '004', pass: '1234' }
//we didnt get thr username even we called it , actually the username was never called
//apperently we can see that the function is called , actually when it was it went to stack
//and upon execution alonng with its internal properties it got out of stack 

// so for that we use .call() method which holds the refernece 

function anotherProfile(username,id,pass) { 
   setUser.call(this,username);//in call() method we pass aother parameter which is
                               //the current conntext of the function we are referring to
   this.id=id;
   this.pass=pass;
 }
  console.log('\n');// line break

 const val2 =new anotherProfile('Saad',"007","4321");
 console.log(val2); //output: aanotherProfile { username: 'Saad', id: '007', pass: '4321' }

 //this is how we work with call() method