//filter method filters the values which satisfies a condition which is set using filter 

const Numbers = [1,22,3,44,5,66,10,24,3,4,2];
//lets filter the numbers greater than 10
console.log(Numbers.filter( (numbers) => numbers>10 )); //you pass a function and then condition 
                                                        

//and if you open a scope '{}' then you have tpo use the return keyword
//recall explicit return

console.log('\n');
console.log( Numbers.filter( (num) => {
    return num<50 && num>4;   
} ) );   //we will get all the numbers greter than 4 and smaller than 50 in the array

console.log('\n');

//chaining is when you call a method on the result of another method
//we will add map on an a map and then filter on that at once

const array = [1,2,3,4,5,7,8,9,10,11,12,13,14,15];
console.log(
    array.map( (num) => num*4 ).
    map( (num) => num +4 ). 
    filter( (num) => {
        return num>20 && num<50;
    } )
);

/*
The map() function is used twice in a chain to transform each element of the array.
The first map() multiplies each number by 4, and the second map() adds 4 to each result.
Finally, the filter() function is used to select only the numbers that satisfy a 
specific condition. In this case, it filters out numbers that are greater than 20
and less than 50.
The resulting filtered array is returned. this is chaining
*/

