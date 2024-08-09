//Reduce method
//The reduce() method is used to reduce the array to a single value.
//It executes a provided function for each value of the array (from left-to-right).
//The return value of the function is stored in an accumulator (result/total).
//The reduce() method does not reduce the original array.
//The reduce() method can accept an initial value for the accumulator.
//The reduce() method does not execute the function for array elements without values.

const array = [1,2,3,4,5,6,7,8,9];

const result = array.reduce( (accumulator,currentValue) => {
    return accumulator + currentValue;
},0 ); //accumultor willl store the returned value
          // 0 in the end is the value withwhich we want to initialize the accumulator 

 console.log(result);       
console.log("\n");
//lets see a realife use of reduce function

const shoppingCart = [
    {
        Item:"Noodles" ,
        price: 200
    },
    {
        Item: "Olive Oil" ,
        price: 300
    },
    {
        Item: "Cream" ,
        price: 89
    }
];
// we have to calculate the total price now 

const total = shoppingCart.reduce( (acc,item) =>{
    return acc+item.price;
},0 );

//well the item traverses through each value and we are accessing 
//item.price so it conatins all the prices only which will then added to accumulator
//which was initialized 0 so it will again added with the next item.price and returns the total
console.log(total); //589