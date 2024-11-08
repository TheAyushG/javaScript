//IMMEDEATLY INVOKED FUNCTION EXPRESION (IIEF)

(function cahi() {
    console.log(`DB CONNECTED`);
}) ();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) (`ayush`);
