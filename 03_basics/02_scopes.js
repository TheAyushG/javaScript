//var c = 300  //global scope
let a = 300
if (true) {
    let a = 10
    const b = 20
    //var c = 30
    //console.log("INNER: ", a);
}

//console.log(a)
//console.log(b)
//console.log(c)

function one(){
    const username = "ayush"

    function two(){
        const website = "youtube"
      //  console.log(username);
    }
  //  console.log(website);

    two()
}

if(true){
    const username = "ayush"
    if (username === "ayush") {
        const website = " youtube"
        //console.log(username + website);
    }
   // console.log(website)
}
//console.log(username);



//++++++++++++++++++++++++++ intersting +++++++++++++++++++++++++++

//console.log(addone(5))
function addone(num){
    return num +1
}


//console.log(addTwo(5))  not possible to exces this value from before the declration
const addTwo = function(num){
    return num + 2
}

