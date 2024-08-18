let pera = document.createElement("p");
pera.innerText = "Hey i'am red!"
document.querySelector('body').append(pera)
pera.classList.add("red")
let h3 = document.createElement("h3");
h3.innerText = "Hey i'am h3";
document.querySelector("body").append(h3);
h3.classList.add("blue");
let div = document.createElement('div');
let h1 = document.createElement('h1');
let p1 = document.createElement('p');
h1.innerText = "I'm in div element"
p1.innerText = "MEE TOO!";
div.appendChild(h1);
div.appendChild(p1);
document.querySelector("body").append(div);
div.classList.add("dd");