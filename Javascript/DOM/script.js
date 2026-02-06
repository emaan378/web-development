// document.body.style.background="Black";
// document.body.style.color="white"
// document manipulation

// selecting element through id

// let heading1=document.getElementById("Heading")
// console.dir(heading1)
// selecting element through class

// let headings=document.getElementsByClassName("Heading")
// console.log(headings)
// selecting with tags

// let paras=document.getElementsByTagName("p")
// console.log(paras)
// query selector

// let first_element=document.querySelector("p")
// console.dir(first_element)
// console.log(first_element.tagName)

// let all_element=document.querySelectorAll("p")
// console.dir(all_element)

// let selclass=document.querySelectorAll(".Heading")
// console.dir(selclass)

// let idsel=document.querySelectorAll("#id1");
// console.log(idsel)

// console.dir(document.body.firstChild);
// console.dir(document.querySelector("div").children);

// let div=document.querySelector("#id2")
// console.log(div)
// console.log(div.innerText)
// console.log(div.innerHTML)
// console.log(div.textContent)
// difference between inner html and innertext

// 🟢 innerHTML
// 👉 Kya karta hai?

// Element ke andar ka pura HTML return / set karta hai

// Tags ko bhi read & write karta hai

// 🔵 innerText
// 👉 Kya karta hai?

// Sirf visible text deta hai

// HTML tags ignore karta hai
// practice questions

// question no 1
// let h=document.querySelector("h2");
// console.log(h)
// h.innerText=h.innerText +" from Apna College"
// question no 2
// let divs=document.querySelectorAll(".box");
// divs[0].innerText="from  unique value 1";
// divs[1].innerText="From unique value2";
// divs[2].innerText="From unique value3"
// let idx=0;
// for (div of divs){
//     div.innerText=`new unique value ${idx}`;
//     idx++;
// }

// DOM Part 2

// to get attribute value
// let div=document.querySelector("div")
// console.log(div)
// let id=div.getAttribute("id")
// console.log(id)
// let val=div.getAttribute("name")
// console.log(val)
// let para=document.querySelector("p");
// console.log(para.getAttribute("class"))
// // set attribute to change attribute value
// console.log(para.setAttribute("Class","newclass"))
// let div=document.querySelector("div");
// div.style.backgroundColor="Brown"
// div.style.backgroundColor="Pink"
// div.style.fontSize="20px"
// div.innerText="Hello!"
// div.style.padding="20px"

// how to add new element 
// .append is used to add at the end
// let newbtn=document.createElement("button")
// newbtn.innerText="click me!"
// console.log(newbtn)
// let div=document.querySelector("div")
// div.append(newbtn)
// .prepand is used to add at the start
// div.prepend(newbtn)

// .before add before the node
// div.before(newbtn)

// .after add after the node
// div.after(newbtn)

// let p=document.querySelector("p")
// p.after(newbtn)
 
// creating new heading element
let newhead=document.createElement("div")
newhead.innerText="We are learning DOM"
newhead.style.fontSize="30px"
console.log(newhead)
let newHeading=document.createElement("h1")
newHeading.innerText=<i>I am new!</i>
document.querySelector("body").prepend("newHeading");
