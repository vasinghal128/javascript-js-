let pencilprice = 10;
let eraserprice = 5;
let output = `The total price is: ${pencilprice+eraserprice} Ruppes.`
console.log(output)
console.log(`The total price is: ${pencilprice+eraserprice} Ruppes.`)
let color = "green";
if(color == "red"){
    console.log("stop color is red now");
}
else if(color == "yellow"){
    console.log("slow color is yellow now");
}
else{
    console.log("go color is green now");
}
size = "XL";
if(size == "XL"){
    console.log("Price is 250");
}
else if(size == "L"){
    console.log("Price is 200");
}
else if(size == "M"){
    console.log("Price is 150");
}
else if(size == "S"){
    console.log("price is 50")
}
else{
    console.log("please select valid size")
}
if(true){
    console.log("it has true value")
}
else{
    console.log("it has false value")
}
// switch statement
let colour = "yellow";
switch(colour){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go ahead")
        break;
    default:
        console.log("Traffic lights broken")
}
// week
let day = 4 ;
switch(day){
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wensday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday");
        break;    
    default:
        console.log("Invalid input")
}
alert("Some thing went wrong");
console.log("This is a simple message");
console.error("This is an Error message");
console.warn("This is a warn message");
let ns = prompt("Enter your name: ");
console.log(ns);
let a = prompt("Enter first number")
let b = prompt("Enter second number")
if(a%10 == b%10){
    alert("Last digit is same");
}
else{
    alert("Last digit is not same");
} 
let msg = "  Hel lo   ";
console.log(msg);
msg =  msg.trim();
console.log(msg);
let na = "VaiBHav";
console.log(na.toUpperCase());
console.log(na.toLowerCase());
let m = "Iloveindia";
let r = m.indexOf("i");
console.log(r);
let ma = "  hello  ";
let newma = ma.toUpperCase().trim(); // it convert ma to uppercase and trim cut spaces
console.log(newma);
let hel = "hellocodders";
console.log(hel.slice(0,5));
console.log(hel.slice(5));
console.log(hel.slice(-2));
console.log(hel.replace("hello","hii"));
console.log(hel);
console.log(hel.replace('o','u'));
console.log(hel);
hel = hel.replace("hello","hii");
console.log(hel);
console.log(hel.repeat(4));