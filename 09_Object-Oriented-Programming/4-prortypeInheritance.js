// when one object/class get the acces to another object/class is called inheritance
// this means you can use the properties and values or methods 
//of one object in another object  by inheriting them

// Define the python object with properties
const python = {
    version: '3.4',
    environment: 'vscode'
};

// Define the languages object that contains other languages
const languages = {
    js: { version: '15.6', environment: 'vscode' },
    py: python // Reference to the python object
};

// Create an instance of Object based on languages
const myPython1 = new Object(languages);
const myPython2 = new Object(languages);

// Attempt to access properties directly from myPython
console.log(myPython1.version); // undefined

// Set the prototype of myPython to python to access its properties
Object.setPrototypeOf(myPython2, python);

// Now we can access the properties of the python object through myPython
console.log(myPython2.version); // '3.4'
console.log(myPython2.environment); // 'vscode'
