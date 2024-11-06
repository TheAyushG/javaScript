//primitive

// 7types:- string, Number, boolean, Null, Undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

const bigNUmber = 24558913571852n


//reference (non primitive)
// Array, Object, Functions

const cars = ["bmw", "audi", "tata"];
let myObj = {
    name: "ayush",
    age: 20,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId)