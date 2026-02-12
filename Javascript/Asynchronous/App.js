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
// Call back hell

function getData(dataID,getNextData){
    setTimeout(()=>{
  console.log("Data",dataID)
  if (getNextData){
    getNextData();
  }
    },2000)
}
getData(1,()=> {
    getData((2),()=>{
        getData(3);
    });
})