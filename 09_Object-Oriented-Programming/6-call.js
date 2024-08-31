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
console.log(val);  //output: setProfile { id: '004', pass: '1234' }
//we didnt get thr username even we called it , it also logged the uu