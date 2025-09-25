//#Primitive Data type

//7 types :String, Number , Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue= 100.3

const isLoggedIn= false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber =28449248728325456654645654565n




//Reference( Non Primitive )

//Array , Objects , Functions

const heros=["Shaktiman", "naagraj","doga"]//Array

let myObj={
    name:"Vishal",
    age:22,
}

const myFunction=function(){
    console.log("Hello world");
    

}

console.log(typeof bigNumber);
console.log(typeof myFunction);
