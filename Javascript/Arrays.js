// let marks=[89,78,90,67,50];
// console.log(marks);
// console.log(marks.length);//property
// let languages=["C++","Java","Python","C","Javascript"];
// console.log(languages)
// //array is not a type itself it is an object type.

// languages[0]="Php"
// console.log(languages[0],languages[1]);
// Arrays are immutable in javascript
// loop over array

// let languages=["C++","Java","Python","C","Javascript"];
// for (idx=0;idx<languages.length;idx++){
//     console.log(languages[idx]);
// }
//for of 
// for(let language of languages){
//     console.log(language)
// }
// cities=["Faisalabad","Islamabad","Karachi","Lahore"]
// for(let city of cities){
//     console.log(city.toUpperCase())
// }
// let marks=[85,97,44,37,76,60]
// sum=0;
// for(let i of marks){
//     sum+=i;
// }
// console.log("Sum:",sum)
// result=sum/marks.length;
// console.log("Average :",result)
// practice question:


// for a given array with price of 5 itmes->[250,645,300,900,50].All items have an offer of 10% Off of them.change the array to store the final price after applying offer

// let array=[250,645,300,900,50]
// for (let i=0;i<array.length;i++){
//     let offer=array[i]/10;
//     array[i]-=offer;
// }
// console.log(array)
// solve using for of loop

// let array=[250,645,300,900,50]
// let i=0
// for (let val of array){
//     console.log(`value of index${i} is ${val} `);
//     let offer=val/10;
//     array[i]=array[i]-offer;
//     console.log(`value after offer = ${array[i]}`);
//     i++;
// }
// Array methods


// push (add at the end) change the original Array

// let items=["apple","Chips","Grapes","Pizza"]
// items.push("Shawarma");
// items.push("Cocacola","Pumpkin","Lichi")
// console.log(items)
// // pop delet one from end

// items.pop()
// console.log(items)
// tostring change array into string but dont change the original array it create a copy and change there

// let items=["apple","Chips","Grapes","Pizza"]
// console.log(items)
// console.log(items.toString())
// Concat method not change original one array

// let  favsubj=["MAth","Physics","Comp"]
// let  dislikesubj=["Chem","Eng","Eco"]
// let subj=favsubj.concat(dislikesubj)
// console.log(subj)
// unshift method (add values in the starting) and shift delet the starting value

// dislikesubj.unshift("Pak studies");
// console.log(dislikesubj);
// let val= dislikesubj.shift();
// console.log("Deleted value",val);
// slice methode (not change the original array)

// let marks=[45,56,67,78,34,90,99];

// console.log(marks.slice(0,4));
// splice methode change the original Array(add,remove,replace)

//  let marks=[45,56,67,78,34,90,99];
//  marks.splice(2,2,101,102,103);
//  console.log(marks)
// //  Add Element using splice

// marks.splice(6,0,456);
// console.log(marks)
// Delete element using splice

// marks.splice(3,1)
// console.log(marks)
// // replace element using 
// marks.splice(1,1,45)
// console.log(marks)
// practice question
let companies=["Bloomberg","Uber","Netflix","Microsoft","Google","IBM"];
// Part(A) 
// companies.shift(0);
// console.log(companies);
//  part(B)
// companies.splice(1,1,"Ola");
// console.log(companies);
// part(C)
// companies.push("Amazon");
// console.log(companies);






