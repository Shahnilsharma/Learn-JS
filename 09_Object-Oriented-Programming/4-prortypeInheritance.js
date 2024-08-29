// when one object/class get the acces to another object/class is called inheritance
// this means you can use the properties and values or methods 
//of one object in another object  by inheriting them

const python= {
    version:'3.4',
    environment: 'vscode'

}

let javascript ={
    version:'15.2',
    environment:python.environment //we can not acces this here 
}

//so we have to inherit the properties of python to javascript
// Object.setPrototypeOf(python, javascript) //now we can acces it
console.log(javascript.environment);