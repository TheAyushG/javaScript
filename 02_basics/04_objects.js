//singleton

//const tinder = new object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "ayush"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "ayush@gmail.com",
    fullName: {
        userFullname: {
            firstName: "ayush",
            lastName: "gurjar",
        }
    }
}

//console.log(regularUser.fullName)


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign(obj1, obj2)

const obj3 = {...obj1, ...obj2} //sprade
//console.log(obj3);

const users = [
    {
        id: 1,
        email: "ayush@123gmail.com",
    },

    {
        id: 1,
        email: "ayush@123gmail.com",
    },
]

users[1].email
//console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty(`isLoggedIn`));