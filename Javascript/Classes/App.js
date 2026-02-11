// Prototype in JS
// In JavaScript, prototype is a mechanism that allows objects to inherit properties and methods from another object.
// if object and prototype has same methodes object methods will be used
// const student={
//     name:"Emaan Fatima",
//     marks:45,

// }
// const employee={
// calTax(){
// console.log("Current tax rate is 10%")
// }
// }
// const arjunKumar={
//     salary:5000,
//     calTax(){
//         console.log("Current Tax rate is 20%")
//     }

// }
// arjunKumar.__proto__= employee;
// console.log(arjunKumar)
// console.log(arjunKumar.calTax())
// // Class

// class toyotaCar{
//     constructor(brand,milage){
//         console.log("Creating custom constructor")
//         this.brand=brand;
//         this.milage=milage;
//     }
//     stop(){
//         console.log("Stop");
//     }
//     start(){
//         console.log("Start");
//     }
// }
// console.log(toyotaCar)
// let fortuner= new toyotaCar("fortuner",10);
// console.log(fortuner)
// let lexus= new toyotaCar("Lexus",12);
// console.log(lexus)
// // inheritance in JS
// class parent{
//     hello(){
//         console.log("Hello in JS World")
//     }

// }
// class child extends parent{}
// let obj= new child();
// console.log(obj.hello())

// class Person{
//     constructor(name){
//         // console.log("Enter Parent constructor")
//           this.species="Homo sapiens"
//           this.name=name;
//     }
    
    
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("Sleep")
//     // }
//     // work(){
//     //     console.log("Do nothing")
//     }
// }
// class Engineer extends Person{
//     constructor(name){
//         //  console.log("Enter child constructor")
//         super(name);//to invoke parent class construtor
       
//         //  this.branch=branch
//         //   console.log("Exit child constructor")
//     }
     
//     work(){
//         super.eat()
//         console.log("Solve Problems Build Something.")
//     }
   
// }
// class Doctor extends Person{
//     work(){
//         console.log("Treat Paitents")
//     }
    
// }
// let newEng= new Engineer("Emaan");
// console.log(newEng)
// console.log(newEng.work())

// if child and parent has same method then child method will be used[Method Overriding]

//super Keyword
// practice Question

// question no 1
// you are creating a website for your university .create a class user with two properties,name or email.it also has a method called view data() that allow use to view website data.
let data="SECRET INFORMATION"
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewdata(){
        console.log("Website Data :",data)
    }
}
let stud1=new user("Elish","alish12@gmail.com")
console.log(stud1)
let stud2= new user("Husnain","husnaim234@gmail.com")
console.log(stud2)
let teacher1=new user("Eman","ema567@gmail.com")
console.log(teacher1)
let teacher2=new user("Midhat","mogj90@gmail.com")
console.log(teacher2)
console.log(teacher2.viewdata())
// Part 2
// create a new class called admin which inherit from users.Add a new method called edit data to admin that allows it to edit website data
class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    
    edit_data(){
        data="Some new value";
    }

}
let admin1= new admin("Admin",'admin@gmail.com');
console.log(admin1)





