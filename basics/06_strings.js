const name = "ayush"
const count = 50

//console.log(name + count);  it is not a good method

//console.log(`my name is ${name} and my count is ${count}`)


const gameName = new String('ayush')

//console.log(gameName[0])
//console.log(gameName.length)

//console.log(gameName.toUpperCase())
//console.log(gameName.charAt(2));

//console.log(gameName.indexOf('s'))

const stringOne = gameName.substring(0, 4)
//console.log(stringOne)

const stringtwo = gameName.slice(-4, 4)
//console.log(stringtwo)

const stringThree = "    ayush    "
//console.log(stringThree)
//console.log(stringThree.trim())


const url = "https://ayush.com/ayush%20gurjar"
console.log(url.replace('%20', '-'))

console.log(url.includes('hello'))
console.log(url.includes('ayush'))