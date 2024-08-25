let btn = document.querySelector("button");
btn.addEventListener("click", function(event){
    console.log(event); // pointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
});
btn.addEventListener("dblclick", function(event){
    console.log(event); //MouseEvent {isTrusted: true, screenX: 57, screenY: 139, clientX: 57, clientY: 24, …}
});
let inp = document.querySelector("input");
inp.addEventListener("keydown", function(event){ // keydown use when we pressed key
    console.log(event);
    console.log(event.key); // it print what key you press
    console.log(event.code); // it print keycode of pressed code
    console.log("key was pressed");
});
inp.addEventListener("keyup", function(event){ // keydown use when we released key
    console.log(event);
    console.log(event.key);
    console.log(event.code);
    console.log("key was realsed");
});
//Activity
let move = document.querySelector(".move");
move.addEventListener("keydown", function(event){
    if(event.code == "ArrowUp" || event.code == "KeyW"){
        console.log("Your character move forword");
    }
    if(event.code == "ArrowDown" || event.code == "KeyS"){
        console.log("Your character move Back");
    }
    if(event.code == "ArrowLeft" || event.code == "KeyD"){
        console.log("Your character move Left");
    }
    if(event.code == "ArrowRight" || event.code == "KeyA"){
        console.log("Your character move Right");
    }
});