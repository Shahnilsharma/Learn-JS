// binary comparisons will always return either 1= true or 0=false
console.log(1<2) //lessThan(true)
console.log(1>2)  //greter than(false)
console.log(1<=2)  //less than equal to
console.log(1<=2)  //greter than eqauls to
console.log(1==2)  //equals to
console.log(1!=2)  //not equal to 


// make sure u always compare same data types
console.log("2">1);//this automatically convert "2" into number and shows true
console.log(1>"02");


console.log(null>0);
console.log(null<0);
console.log(null>=0); //here the null is being converted to 0 thats why its true
console.log(null<=0);
console.log(null===0); //prefered to use === while comparing

console.log(undefined>0);
console.log(undefined<0);
console.log(undefined>=0);
console.log(undefined<=0);
console.log(undefined!=0); //undefined is not equal to 0 so results in true
console.log(undefined=0); // single = is an assignemnet operater its not comparison