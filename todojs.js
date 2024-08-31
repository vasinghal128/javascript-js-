let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
btn.addEventListener("click", function(){
    let task = document.createElement("li")
    task.innerText = inp.value
    let delbtn = document.createElement("button");
    delbtn.innerText = "delete"
    delbtn.classList.add("delete");
    task.appendChild(delbtn);
    ul.appendChild(task);
    console.log("Taks add");
    inp.value = "";
});
ul.addEventListener("click", function(event){
    console.dir(event.target); // it refers to wich button we access
    if(event.target.nodeName=="BUTTON"){ // it means what is type of element
        let listitem = event.target.parentElement;
        listitem.remove();
        console.log("Task delete");
    }
});
