// // function myfunction(){
// //     console.log("Welcome in the programming World");
// //     console.log("We are learning JS");
// // }
// // function invoke,function call
// // myfunction();
// // function myfunc(msg)//parameter
// // {
// //     console.log(msg)
// // }
// // myfunc("I LOVE JS")//argument
// // function for sum of two numbers 

// // function sum(a,b){
// // console.log(`Sum of ${a} and ${b} is `,a+b)
// // }
// // sum(4,6);
// // fuction for multiplication of two numbers

// // function multp(a,b){
// //     m=a*b;
// //     return m;
// // }
// // let val=multp(5,9);
// // console.log(`the product of  numbers is`,val)
// // variable creat with in function has just block scope means they are not valid outside the function

// // function sum(a,b){
// //     return a+b
// // }
// // arrow function
// // const arrowsum=(a,b)=>{
// //     console.log(a+b);
// //  }
// // multiplicaion function
// // function mul(c,v){
// //     return a*b
// // }
// // mul(8,9);
// // arrow function
// // const mul=(a,b)=>{
// //     console.log(a*b)
// // }
// // mul(5,6);
// // arrow functions are the part of modern JS
// // practice question
// // part(A)
// //create a function using the function keyword that takes a string as an argument and return the number of vowels in the string.

// // function vowels(str){
// //     let count=0;
// //     for(let i of str)
// //       {
// //       if (i==="a"||i=="e"||i==="o"||i==="i"||i==="u")
// //         {
// //         count++
// //       }
// //     }
// // console.log(count);
// // }
// // vowels("hello");
// // part(B)
// // create an arrow function for the same purpose
// // const vowels=(str)=>{
// //     let count=0;
// //     str=str.toLowerCase();
// //     for(let i of str)
// //       {
// //       if (i==="a"||i=="e"||i==="o"||i==="i"||i==="u")
// //         {
// //         count++
// //       }
// //     }
// //     console.log(count);
// // }
// // vowels("Apna College")
// // foreach loop in arrays (foreach is a method)
// // if we specify some function with in an obj then it become method
// // call back is a function that is passed to another function as an argument
// // arr=["Alisha","Emaan ","Husnain","Midhat"]
// // arr.forEach(function printval(val){
// //   console.log(val.toUpperCase());
// // })
// // with arrow function
// // arr.forEach((val,idx,arr) => {
// //   console.log(val.toUpperCase(),idx,arr)
  
// // });
// // foreach work only with arrays.not with strings
// // foreach is a higher order fucntion/method.higher order functions are those that takes other functions as a parameter and return the other function.
// // practice question

// // for a given array of numbers,print the square of each value using foreach loop.
// // array=[1,2,3,5,6,7,4,8];
// // array.forEach((val)=>{
// //   console.log(`square of ${val} is ${val*val}`);
// // });
// // another way
// // array=[1,2,3,5,6,7,4,8];
// // let calcsqu=(val)=>{
// //   console.log(`square of ${val} is ${val*val}`);
// // }
// // array.forEach(calcsqu)
// // Array methods


// // map method (create a new array with the result of some operations ) very similar to foreach 
// // array=[1,2,3,5,6,7,4,8];
// // array.map((val)=>{
// //   console.log(val);
// // })
// // let new_arr = array.map((val)=>{
// //  return val*val
// // })
// // console.log(`square of number is ${new_arr}`)
// // console.log(array)
// // filter method(create a new array of element that gives true for the condition.)

// // filter even numbers in array
// // aray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// // let new_arr=aray.filter((val)=>
// // {
// //   return val%2===0
// // })
// // console.log(new_arr)
// // filter for divisible by 3

// // aray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// // let new_arr=aray.filter((val)=>
// // {
// //   return val%3===0
// // })
// // console.log(new_arr)
// // Reduce method(perform some operations and reduces the array to a single value and it returns that single value.)

// let array=[1,2,5,6,7,8]
// // const output=array.reduce((res,current)=>{
// //   return res+current
// // })
// // console.log(output)
// // return the maximum number question

// // const output= array.reduce((pre,curr)=>{
// //    return pre>curr?pre:curr
// // })
// // console.log(output)
// // practice question

// we are given array of marks of students .filter out of the marks of the students that scored more than 90.
// marks=[23,34,55,65,67,78,89,90,98,99,92]
// const max_mark=marks.filter((val)=>{
//   return val>90;
// })
// console.log(max_mark)
// take a number n as input from user .create an array of numbers from 0 to n.

// let n= prompt("Enter a number:");
// let arr=[];
// for (let i =1;i<=n;i++){
//   arr[i - 1]=i;
// }
// console.log(arr)
// use a reduce method to calculate sum of all numbers in the array

// array=[34,45,67,88]
// const add = array.reduce((pre,curr)=>{
//   return pre+curr;
// })
// console.log(add)
// use a reduce method to calculate the product of all numbers

array=[34,45,67,88];
const mul=array.reduce((pre,curr)=>{
  return pre*curr
})
console.log(mul)








