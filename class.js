// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log('Hello, my name ${this.name} and my age is ${this.age}' );
        
//     }
// }

// const user1 = new Person ("Ram", 77);
// const user2 = new Person ("Raja", 77);

// user1.greet();
// user2.greet();



class Car {
    constructor(name, company){
        this.name = name;
        this.company = company;
    }
    greet(){
        console.log(`car name ${this.name} and company name ${this.company}`);
        
    }
}
const user1 = new Car ("M4", "BMW");
const user2 = new Car ("M4 compatition", "BMW");

user1.greet();
user2.greet();
