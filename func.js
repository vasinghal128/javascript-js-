let age = 19;
function checkadult(){
    if(age>=18){
        console.log("Adult");
    }
    else{
        console.log("Not an adult")
    }
}
checkadult();
function diceroll(){
    console.log(Math.floor(Math.random()*6)+1)
}
diceroll();
function printinfo(name,age){ // funstion take input name and age in order
    console.log(`${name}'s age is ${age}`);
}
printinfo("Vaibhav",19);

let na = prompt("Enter your name")
function printname(na){
    console.log(na);
}
printname(na);
console.log(printname) // without peranthesis it print function detail
function sum(a ,b){
    add = a+b;
    return add; // return use to return some value of function after return inside function after return no code inside function will work 
    console.log("vaibhav0");
}
let s = sum(8, 8);
let three = sum(sum(8,8),8); // it do three sum using two sum function
console.log(s)
console.log(three);
console.log(sum(8, 8));
// print 1 to n
function nsum(n){
    sum = 0;
    for(i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}
let nsumm = nsum(10);
console.log(nsumm);
// concatinate all string in array
let sarr = ["vaibhav", "Shivam", "Sumit", "Animesh"];
function conc(sarr){
    let result = "";
    for(let i=0;i<sarr.length;i++){
        result += sarr[i];
    }
    return result;
}
console.log(conc(sarr))