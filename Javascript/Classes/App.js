// Prototype in JS
// In JavaScript, prototype is a mechanism that allows objects to inherit properties and methods from another object.
// if object and prototype has same methodes object methods will be used
const student={
    name:"Emaan Fatima",
    marks:45,

}
const employee={
calTax(){
console.log("Current tax rate is 10%")
}
}
const arjunKumar={
    salary:5000,
    calTax(){
        console.log("Current Tax rate is 20%")
    }

}
arjunKumar.__proto__= employee;
console.log(arjunKumar)
console.log(arjunKumar.calTax())
// Class

class toyotaCar{
    constructor(brand,milage){
        console.log("Creating custom constructor")
        this.brand=brand;
        this.milage=milage;
    }
    stop(){
        console.log("Stop");
    }
    start(){
        console.log("Start");
    }
}
console.log(toyotaCar)
let fortuner= new toyotaCar("fortuner",10);
console.log(fortuner)
let lexus= new toyotaCar("Lexus",12);
console.log(lexus)
// inheritance in JS
class parent{
    hello(){
        console.log("Hello in JS World")
    }

}
class child extends parent{}
let obj= new child();
console.log(obj.hello())

class Person{
    eat(){
        console.log("Eat");
    }
    sleep(){
        console.log("Sleep")
    }
    work(){
        console.log("Do nothing")
    }
}
class Engineer extends Person{
    work(){
        console.log("Solve Problems Build Something.")
    }
}
class Doctor extends Person{
    work(){
        console.log("Treat Paitents")
    }
    
}
let Emaan= new Engineer();
console.log(Emaan)
// if child and parent has same method then chill method will be used[Method Overriding]