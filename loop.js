for(let i=0;i<=5;i++){
    console.log(i);
}
// odd numbers
console.log("Odd forword")
for(let i=1 ; i<=15; i++){
    if(i%2 != 0){
        console.log(i);
    }
}
console.log("Backward")
for(let i=15 ; i>=1; i = i-2){
    console.log(i);
}
// Even numbers
console.log("Even forword")
for(let i=1 ; i<=15; i++){
    if(i%2 == 0){
        console.log(i);
    }
}
console.log("Backward")
for(let i=14 ; i>=2; i = i-2){
    console.log(i);
}
// print 5 multiplication table
let n = prompt("Enter your number: ");
n = parseInt(n); // parseInt make string to integer
for(let i=1 ; i<=10; i++){
    console.log(`${n} X ${i} = ${n*i}`);
}
for(let i=0;i<=3;i++){
    console.log(`Outer loop ${i}`);
    for(let j=0;j<=3;j++){
        console.log(j);
    }
}
// while loop
let i = 1;
while(i<=5){
    console.log(i);
    i++;
}
console.log(i);
// favorite movie
const fav = "animal";
let guess = prompt("Guess My favorite movie");
while(guess != fav){
    if(guess == "quit"){
        console.log(`you quit the game My favorite movie is ${fav}`)
        break;
    }
    guess = prompt("You are wrong please try again ");
}
if(fav == guess){
    console.log(`Right My favorite movie is ${fav}`)
}
//Break
let q = 1;
while(q<=5){
    if(q == 3){ // it break loop when value of i is 3
        break;
    }
    console.log(q);
    q++;
}
// loops with array
let Fu = ["apple", "Banana", "pineapple", "Orange", "Grappes"];
for(let i=0 ;i<Fu.length;i++){
    console.log(i,Fu[i]);
}
let heros = [["Ironman", "Spiderman", "Thor"], ["Superman", "Batman", "Flash"]];
for(let i=0;i<heros.length;i++){
    console.log(`List #${i}`);
    for(let j=0;j<heros[i].length;j++){
        console.log(`j = ${j}, ${heros[i][j]}`);
    }
}
// for of loop
let fruits = ["Mango", "Apple", "Banana", "Orange", "Litchi"]; 
for(fruit of fruits){ // fruit store single element of fruits array step by step throuh itrate
    console.log(fruit); // It print elements of fruits
}
for(ch of fruits[0]){ // ch store character of fruits[0](Mango) step by step throuh itrate
    console.log(ch); // it print characters of fruits[0](Mango)
}
for(list of heros){ // list store array iteratively(step by step) of heros array
    console.log(list); // it print array iteratively(step by step) of heros array
    for(hero of list){ // hero store hero name  iteratively(step by step) of list
        console.log(hero); // it print hero name iteratively(step by step) of list array
    }
}