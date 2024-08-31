let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");
div.addEventListener("click",function(){
    console.log("div was clicked")
});
ul.addEventListener("click",function(){
    console.log("ul was clicked") // Here div's event also execute because div is ul parent element
});
for(li of lis){
    li.addEventListener("click",function(){
        console.log("li was clicked") // Here ul's and div's event also execute because ul and div are li parent element
    });
};
let dii = document.querySelector(".dii");
let ull = document.querySelector(".ull");
let liis = document.querySelectorAll(".lii");
dii.addEventListener("click",function(){
    console.log("div was clicked")
});
ull.addEventListener("click",function(event){
    event.stopPropagation(); //it is use to stop execute parent event 
    console.log("ul was clicked")
});
for(lii of liis){
    lii.addEventListener("click",function(){
        event.stopPropagation();
        console.log("li was clicked");
    });
};