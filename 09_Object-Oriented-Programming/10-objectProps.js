//object properties
//there are fe properties like value,writable,enumerable and configurable
// we can see them bu using getOwnPropertyDescriptop()
const student ={
    name:'Sam',
    age:20,
    grade: 'A',
}
console.log(Object.getOwnPropertyDescriptor(student,"grade"));
//output: { value: 'A', writable: true, enumerable: true, configurable: true
//it takes the object name and the key of which property u need 
console.log('\n');//line break
//we can alter these properties by using defineProperty()

Object.defineProperty(student,"grade",{
    writable:false,
    enumerable:false,
}); //defineProperty was used as getter and setter at early time
console.log(Object.getOwnPropertyDescriptor(student,"grade"));

//output: { value: 'A', writable: false, enumerable: false, configurable: true