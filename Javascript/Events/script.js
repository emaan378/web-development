// events handling using js
// let btn=document.querySelector("button")
// btn.onclick =(evt)=>{
//     console.log(evt)
//     console.log(evt.target)
//     console.log(evt.type)
//     console.log(evt.clientX,evt.clientY)
// console.log('button was clicked')
// alert("You Clicked the button")
// }
// let div=document.querySelector("div")
// div.onmouseover=()=>{
//    console.log('you are inside a div')
//  }
//  event object--(evt)
// Event listners
// let btn=document.querySelector("button")
// btn.addEventListener("click",()=>{
//     console.log("button 1 was clicked handler1")
// })
// btn.addEventListener("click",(evt)=>{
//     console.log("button 1 was clicked -handler2")
//     console.log(evt.type)
//     console.log(evt.target)
// })
// handler3=()=>{
//     console.log("button 1 was clicked  --handler3")
// }
// btn.addEventListener("click",handler3)
// btn.addEventListener("click",()=>{
//     console.log("button 1 was clicked  --handler4")
// })
// btn.removeEventListener("click",handler3)
// practice question


// create a toggle button that change the screen to dark mode when clicked and dark mode when clicked again
let Curr_theme = "light"
let body=document.querySelector('body')
let theme = document.querySelector("button");
theme.addEventListener("click", () => {
    console.log("you are trying to change mode")
    if (Curr_theme === "light") {
        Curr_theme = "Dark"
        // document.querySelector("body").style.backgroundColor="black"
        body.classList.add("dark")
        body.classList.remove("light")
    }

    else {
        Curr_theme = "light"
        // document.querySelector("body").style.backgroundColor="white"
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(Curr_theme)


})


// Imp point
// if we give event both using inline and in JS then the priority is given to the JS event handling
// and if we write events in js using node.event=()=>{} then we write it just one time for one object so to avoid this we use event listners