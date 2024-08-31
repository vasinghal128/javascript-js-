let gameseq = [];
let userseq = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;
let hs = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Start");
        started = true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`
    // random btn
    let randidx = Math.floor(Math.random()*4);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    console.log(randidx);
    console.log(randcolor);
    console.log(randbtn);
    gameflash(randbtn);
}
function check(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
        console.log("Same value");
    }
    else{
        if(level-1>hs){
            hs++;
        }
        h2.innerHTML = `Game over! <b> your score is ${level-1} </b> <br> Your high score is ${hs}<br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
}
function btnpress(){
    console.log(this);
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(userseq);
    check(userseq.length-1);
}
let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}