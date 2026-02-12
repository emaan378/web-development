// // function hello(){
// //     console.log("Hello")
// // }
// // setTimeout(hello,2000)//2s=2000ms
// // 2nd method
// console.log("One");
// console.log("Two");


// setTimeout(()=>{
//     console.log("Hello World")
// },2000)
// console.log("Three");
// console.log("Four");
// // Call Back
// // A function which is passed as an argument to another function
// function sum(a,b){
// console.log("Sum of a and b is ",a+b)
// }
// function calculator(a,b,sum){
// sum(a,b)
// }
// calculator(2,5,sum)


// Callback hell:Nested Call back stacked below one another forming a pyramid sturcture.

function getData(dataID,getNextData){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
  console.log("Data",dataID)
  resolve("success")
    },2000)
});

//   if (getNextData){
//     getNextData();
//   }
    // },2000)
}
// promise chain
//  getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res)=>{
//         console.log(res)
//     })  
// })
// simpliar way:

 getData(1).then((res) =>{
 return getData(2).then(res) 
 })
   








// callback hell
// getData(1,()=> {
//     console.log("Getting data 2")
//     getData((2),()=>{
//         console.log("Getting data 3")
//         getData(3,()=>{
//             console.log("Getting data 4")
//             getData(4);
//         });
//     });
// });
// promises are the solution of the callback Hell
// Promises is an object in JS
// resolved ,rejected //two handlers and also say that they are callback provided by Js
// let promise= new Promise((resolve,reject)=>{
// console.log("I am a promise");
// reject("Some Error Ocurred")
// //   resolve("Success")
// })
// // states of promise:resolved(fulfiled),rejected,pending
// console.log(promise)
// function getData(dataID,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("DATA:",dataID);
//             resolve("SUCCESS");
//             if (getNextData){
//                 getNextData();
//             }
//         },1000);
//     });
// }
// let promise= getData(123);
// console.log(promise)
// const getPromise=()=>{
//    return  new Promise((resolve,reject)=>{
//           console.log("I am a promise")
//           resolve("Success")
//         // reject("Error")
//     });
  
// };
// let promise=getPromise();
// promise.then((res)=>{
//     console.log("Fulfiled",res)
// });
// promise.catch((err)=>{
//     console.log("Rejected",err)
// })
// promise chain
// function asyncFunc1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(" DATA 1")
//             resolve("Success")
//         },2000)
//     })
// }
//     function asyncFunc2 (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(" DATA 2")
//             resolve("Success")
//         },2000)
//     })
// }
// console.log("Fetching data 1")
// let p1=asyncFunc1();
// p1.then((res)=>{
//     // console.log(res)
//     console.log("Fetching data 2")
// let p2=asyncFunc2();
// p2.then((res)=>{
//     // console.log(res)
// });
// })
// simplar way

// console.log("Fetching data1 ")
// asyncFunc1().then((res)=>{
//     console.log("Fetching data 2");
//     asyncFunc2().then((res)=>{});
// })

