//array

const myArr = [0,1,2,3,4,5]
const myCars = ["bmw", "audi"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[1]);

//array methods

/*
myArr.push(6)
myArr.push(7)
myArr.push()
console.log(myArr);
*/

myArr.unshift(9)
myArr.shift()
//console.log(myArr)

//console.log(myArr.includes(9)) //9 is exit in a array or not
//console.log(myArr.indexOf(3))

const newArr = myArr.join()

//console.log(myArr)
//console.log(newArr)

//slice and splice

console.log("A ", myArr)

const myNewArr1 = myArr.slice(1, 3)
console.log("B ", myArr)
console.log(myNewArr1);


const myNewArr2 = myArr.splice(1, 3) //all value print not include 1,2,3
console.log("C ", myArr)
console.log(myNewArr2)
