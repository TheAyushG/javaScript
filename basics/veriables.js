const accountId = 111222
let accountEmail = "ayush@hmail.com"
var accountPassword = "121212"
accountCity = "jaipur"
let accoutnState;

console.log(accountId);

accountEmail = "gurjar@123"
accountPassword = "858585"
accountCity = "dheli"

//prefer not to sue var 
//beacuse of issue in block scope and functional scope

console.table([accountId, accountEmail, accountPassword, accountCity, accoutnState])