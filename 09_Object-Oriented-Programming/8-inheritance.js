//lets crete a class first 
class Student {
    constructor(name, rollNum) {
        this.name = name;
        this.rollNum = rollNum;
        }

    
}

// In object-oriented programming (OOP), inheritance is a mechanism that allows a class to inherit properties and behaviors from another class. The class that is being inherited from is called the parent class or base class, and the class that inherits from it is called the child class or derived class.

class Teacher extends Student{
    constructor(grade,name, rollNum) {
        super(name,rollNum);  //super is the keyword to acces data from the parent class
        this.grade=grade;
        }
        
        assinMajors() {
            if (this.grade >= 80) { 
                return `Student Name: ${this.name} Student grades: ${this.grade}. You are assigned computer science`;
                }
                else if (this.grade >= 70) {
                   return `Student Name: ${this.name} Student grades: ${this.grade}. You are assigned maths`;

                    }
          }
}

//lets create an object of the class
let teacher1 = new Teacher(90,"sam", 1);
console.log(teacher1.assinMajors());
//lets create another object of the class
let teacher2 = new Teacher(70,"Saad", 2);
console.log(teacher2.assinMajors());


