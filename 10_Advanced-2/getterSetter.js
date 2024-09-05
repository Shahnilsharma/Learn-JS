// Getters and setters 
// sometimes we comeup with certain condition like encrypting or abstracting properties
// may be someone asks for access and you want to give a customized access

// lets say you want to add a thirdparty login method and it asks for the acc password 
// and you want to return encrypted form of it

// there we use getters and setters

class Login{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

   get email(){
    return this._email.toUpperCase();
   }
//gets the value and change it to uppercase
//did u notice that we are setting values in constructor as well as in setter 
//this gives an error so generally we use a "_variable" method by just giving a 
//underscore as prefix which overrides the values in constructor

   set email(val){
    this._email=val; //we dont return data in setters
   } //sets the value from getter to the with the data in constructor 

   //for password
   get password(){
    return `no${this._password}here`;//returns an encrypted password
   }

   set password(val){
    this._password=val;
}
}

const getPassword = new Login("abc@xyz.com","Pass");
console.log(getPassword.email); // prints the email in uppercase
console.log(getPassword.password); // prints the encrypted password



