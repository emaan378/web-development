const URL="https://dog.ceo/api/breeds/image/random/facts"

const getFacts = async()=>{
let response= await fetch(URL)
console.log("Getting Data ....")
console.log(response.status)
let data= await response.json();
console.log(data)
}
console.log(getFacts())
// AJAX----Asynchronous JS and XML
// JSON--Javascript object notation--AJAJ(ASynchronus Javascript and JSON)not very popular term
// JSON() method :returns a second promise(input is Json,output is JS object)
// Http(Hyper Text Transfer Protocal) verbs
// headers while getting data using api contain some extra information.