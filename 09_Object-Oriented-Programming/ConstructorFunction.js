
//constructor function 'new'
//impliitly returns 'this'
//it  creates a new instance/object




function bankDetails(accNum,accTitle,accType){
    this.accNum=accNum; 
    this.accTitle=accTitle;
    this.accType=accType;
    return this; //here you are explicitly returning the value of 'this'

}
//now let say you want to add data for multiple bank accounts
const acc1 = bankDetails(101,"sandeep","savings");
// console.log(acc1);  //{102,"sandeep","current"}
const acc2 = bankDetails(102,"sandeep","current");
// console.log(acc1);  //this gives you the data you added
                        //later on it actually overides even its the
                        //acc1 but it returns {accNum:102, accTitle:"sandeep", accType:"current"}

function studentDetails(name,id,department){
    this.name=name;
    this.id=id;
    this.department=department;
    //no need to return 'this' we are using constructor function now
}

const student1 = new studentDetails("sandeep",101,"SE");   
console.log(student1);  
//output: studentDetails { name: 'sandeep', id: 101, department: 'SE' }

const student2 = new studentDetails("Shahnil",102,"CS"); 
console.log(student2);
//output: studentDetails { name: 'Shahnil', id: 102, department: 'CS' }

// console.log(student1);//its not overridden
//output: studentDetails { name: 'sandeep', id: 101, department: 'SE' }