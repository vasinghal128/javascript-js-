let range = prompt("Enetr your range last number");
let random = Math.floor(Math.random()*range)+1;
let guess = prompt("Guess the number");
while(true){
    if(guess == "Quit" || guess == "quit"){
        console.log(`You quit the game the number is ${random}`);
        break;
    }
    if(guess == random){
        console.log(`congrats You are right! the number is ${random}`);
        break;
    }
    else if(guess<random){
        guess = prompt("Oh! Your number is small try again and try to take big value compare to last guess or write 'quit' for quit the game");
    }
    else{
        guess = prompt("Oh! Your number is big try again and try to take small value compare to last guess or write 'quit' for quit the game");
    }
}