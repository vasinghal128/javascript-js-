let btns = document.querySelectorAll("button");
function like(){
    console.log("This photo was liked");
    alert("You liked this photo");
}
function reach(){
    console.log("You reach this button");
}
function sayhello(){
    alert("Hello");
}
for(btn of btns){
    // onclick
    // btn.onclick = like; // onclick use when we click on button and what action perform after click
    // Here after click every button perform like function action and print "This photo was liked" on console and give alert "You liked this photo" on web page
    // onmouseenter
    btn.onmouseenter = reach; // when we reach range of button and we want to perform some action in javascript
    // Here when ewe hover(reach) in range of button then it print "You reach this button" on console
    // btn.addEventListener("click", sayhello); // basically addEventListener use when we perform multiple function actions
    // btn.addEventListener("click", function(){
    //     alert("Vaibhav")
    //});
    btn.addEventListener("dblclick", function(){ // dbl click means double click
        console.log("You double clicked me");
    });
}
let pe = document.querySelector('p');
let div = document.querySelector('.box');
pe.addEventListener("click", function(){
    console.log("This is a pera");
});
div.addEventListener("mouseenter", function(){
    console.log("This is a div");
});
// this
let btnc = document.querySelector(".btnn");
let pp = document.querySelector(".pp");
let ho = document.querySelector("h1");
let ht = document.querySelector("h3");
let changecolor = function(){
    console.log(this);
    console.dir(this); // this is use for refer to current object
    console.dir(this.innerText);
    this.style.backgroundColor = "pink";
};
btnc.addEventListener("click", changecolor); // here this is btnc
pp.addEventListener("click", changecolor); // here this is pp
ho.addEventListener("click", changecolor); // here this is ho
ht.addEventListener("click", changecolor); // here this is ht