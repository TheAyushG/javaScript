//singleton
//object.create

//object litreals

const mySym = Symbol("Key1")

const JsUser = {
    name:  "ayush",
    age: 20,
    [mySym]: "myKey1", //symbol
    location: "jaipur",
    email: "ayush@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "wednesday"],
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser[mySym])  //symbol

JsUser.email = "123ayush@google.com"
Object.freeze(JsUser)

JsUser.email = "123ayush@microsoft.com"
//console.log(JsUser)

JsUser.greeting = function(){
    console.log("hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());