// Higher order function
//There are two condttion of Higher order function
// 1. takes one or multiple function as an argument
// 2. retuen a function 
// a function call Higher order function if function satisfy one or both condition

// 1. takes one or multiple function as an argument
function multiplegreets(func, n){ // Here one argument is function so multiplegreets funtion so it is a Higher order function
    for(let i=1;i<=n;i++){
        func(); // it print function upto n time
    }
}
let greet = function(){
    console.log("hello");
}
multiplegreets(greet ,10); // it print function upto 10 time and mainpoint if we want to pass a function then write only its name not like this(greet())
multiplegreets(function(){ console.log("Namaste")}, 1000); // it print function upto 1000 time

// 2. retuen a function 
function oddorevenfactory(request){ //oddorevenfactory is a function factory wich create many functions
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 ==0)); // it retuen true or false
        }
        return odd;
    }
    else if(request == "even"){
        let even = function(n){
            console.log(n%2 ==0); // it retuen true or false
        }
        return even;
    }
    else{
        console.log("Wrong answer");
    }
}
let request = prompt("Enter your request (odd or even)");
console.log(request);
let func = oddorevenfactory(request); // we store fuction detail(odd or even) according to your request into func now func work as function according to your request
console.log(func);
func(45);
func(4);
func(9);
func(18);