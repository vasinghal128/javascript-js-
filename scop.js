// Lexical scope
function outerfuc(){
    let x = 5; // lexical function
    let y = 6; // lexical function
    function innerfunc(){
        console.log(x); // lexical function and it print x value
         console.log(y); // lexical function and it print y value
    }
}
innerfunc();
function outerfuc(){
    let x = 5;
    let y = 6;
    function innerfunc(){
        let a = 25; // lexical function
    }
    console.log(a); // lexical function and it give error
}
innerfunc();

// Block scope (create and work only inside{})
{
    let a = 25; // Block scope
}
console.log(a) // It give error
{
    const a = 25; // Block scope
}
console.log(a) // It give error

let b = 25; // globel scope
if(b>=18){
    let str="Vaibhav"; // block scope
}
console.log(str); // it give error
// it is not an example of Block scope
{
    var a = 25; // Block scope
}
console.log(a) // It print error

//function scope (create and works only insdie dunction)
function sum(a,b){
    let sum = a+b; // function scope
    console.log(sum) // it print sum value
}
console.log(sum); // it give error

// Globel scope (these are use everywhere)
let m = 25; // globle scope
function mul(a,b){
    console.log(m);
}
// practice 
let greet = "Hello"; // globel scope
function changegreet(){
    let greet = "namaste"; // function scope or lexical scope
    console.log(greet); // it print namaste
    function innergreet(){
        console.log(greet); // lexical scope and it print namaste innerfunction alwayes give prority to outerfunction scope
    }
    innergreet();
}
console.log(greet);
changegreet();