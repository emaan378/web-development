// For loop
// for(let i=1; i<=5;i++){
//     console.log("Apna College")
// }
// calculate sum of 1 to n
// let sum=0;
// let n=9;
// for( let i=1;i<=n;i++){
//     sum+=i;
// }
//  console.log("Sum:",sum);
//  console.log("Loop has ended")
// while loop
// let sum=0;
// let i =1;
// while(i<=10){
//     sum+=i;
//     i++;
// }
// console.log("Sum:",sum);
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++
// }
// let i=20;
// do{
//     console.log("EMAANS Foundation");
//     i++;
// }
// while(i<=10);
// for of loop is used to iterate  string and array values
// let str="EMAAN";
// for(let i of str){
//     console.log("I :",i);
// }
// for in loop
// for...in loop use hota hai:
// object ke keys / properties ko loop karne ke liye
//  ya array ke index nikalne ke liye
// let student={
// name:"Alesh",
// class:11,
// age:17,
// cgpa:3.8,
// ispass:true,
// };
// for (let i in student){
//     console.log("key:",i ,"& value:",student[i]  );
// }
// Exercise Questions
// print all even numbers form 0 to 100
// for (let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }
// question2
// create a game where you start with any random number.Ask the user to keep guessing the number until the users enter the correct value.
// let number=25;
// let userNum=prompt("Guess the number:");
// while( userNum!=number )
//     {
//    userNum= prompt=("You Entered a Wrong Number .Guess again")
// }
// console.log("Congratulations.You Entered the right number")
// String
// let str="Emiii";
// console.log(str.length);
// console.log(str[0]);
// Template literals
// let specialstring=`This is literal string`;
// console.log(specialstring)
// console.log(typeof specialstring)
// string interpolation
// let obj={
//     name:"pen",
//     price:20,
// }
// let output=`The price of ${obj.name} is ${obj.price} rupees`
// console.log(output)
// escape characters
// console.log("EMAA \nFoundation");
// console.log("EMAA \tFoundation");
// let name="EMAA\nFoundation";
// console.log(name.length)
// string methode
// let str="Emaan "
// newstr=str.toUpperCase();
// console.log(str);
// console.log(newstr);
// // strings are immutable in js
// console.log(str.toLowerCase());
// trim method(remove spaces from left or right of the string not the inbetween spaces)
// let str=" EMAAN WILLA                     "
// // console.log(str.trim());
// console.log(str.slice(0,4));
// let str1="Welcome";
// let str2=" in the programming world";
// console.log(str1.concat(str2));
// let str0="Hellololo";
// console.log(str0.replace("lo","p"));
// console.log(str0.replaceAll("lo","p"));
// practice question:
// prompt the user to enter their full name .Generate a username for their based on the input .start username with @ and ending with the full name length.
let symbol="@";
let name = prompt("Enter your Full Name:");
let username = symbol+ name+ name.length;
console.log(username);