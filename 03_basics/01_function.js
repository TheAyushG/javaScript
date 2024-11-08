function myName() {
    console.log("A")
    console.log("Y")
    console.log("U")
    console.log("S")
    console.log("H")
}

//myName()

function addTwoNum(num1, num2){
    console.log(num1 + num2)
}

//addTwoNum(3, 4)
function addTwoNum(num1, num2){
    let result = num1 + num2
    return result
}

const result = addTwoNum(3, 5)
//console.log("result: ", result)

function logInUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return(`${username} is logged in`)
}

//console.log(logInUserMessage("ayush"))

function calculateCartPrice(...num1){
 return num1
}

//console.log(calculateCartPrice(200,300,400,2000))

const user = {
    username: "ayush",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)

const myArray = [200, 300, 400, 500]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200, 300, 400, 500]))