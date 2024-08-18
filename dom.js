console.log(window);
console.log(document);
console.log(document.all);
console.log(document.all[8]);
console.log(document.all[8].innerText);
document.all[8].innerText = "Peter parker";
console.log(document.all[8].innerText);
document.all[8].innerText = "ironman";
console.log(document.all[8].innerText);
document.all[8].innerText = "Spider man";
console.log(document.all[8].innerText);
//getElementById :- It search element by id name and saved as object
let imgobj = document.getElementById("mainImg");
console.log(document.getElementById("mainImg"));
console.dir(imgobj);
console.log(imgobj.id);
console.log(imgobj.tagName);
console.log(imgobj.src);
// getElementsByClassName: - It search element by class name and saved as object
console.log(document.getElementsByClassName("oldImg"));
let classobj = document.getElementsByClassName("oldImg");
console.log(classobj);
console.log(document.getElementsByClassName("oldImg")[1]);
for(let i=0;i<classobj.length;i++){
    console.dir(classobj[i]);
    console.log(classobj[i].src);
    console.log(classobj[i].className);
    console.log(classobj[i].tagName);
}
// getElementsByTagName :- It search element by tag name and saved as object
console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByTagName("p")[1].innerText);
console.log(document.getElementsByTagName("p")[0].innerText);
console.log(document.getElementsByTagName("span"));
// querySelector :- it use to select elements and it select first occur element
console.log(document.querySelector("h1"));
console.log(document.querySelector("#mainImg")); // # for search element by id name
console.log(document.querySelector(".oldImg ")); // . for search element by class name
console.log(document.querySelector("div a"))
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#mainImg"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div a"));
// querySelectorAll :- it use to select elements and it select all those elements
console.dir(document.querySelectorAll("p"));
// using properties and methods
let pera = document.querySelector('p');
console.log(pera.innerText); // innertext shows text visible on web page
console.log(pera.innerHTML); // innerHTML show the all those html tags
console.log(pera.textContent); // textcontent used to show that text that is not visible in webpage
let heading = document.querySelectorAll("h1");
// Manuplating attributes
let img = document.querySelector('img');
console.log(img.getAttribute('id')); // getAttribute use to show show value of attributes it show id value if there is no value of id it show null
img.setAttribute('class', 'spimg'); // setAttribute use to update and set the attribute value
console.log(img.getAttribute('class'));
// Manuplating style
console.log(img.style);
let head = document.querySelector('h1');
console.log(head.style);
head.style.color = 'red';
head.style.backgroundColor = 'darkblue'; // Here backgroundColor is a camelCase example
// camelCase :- camelCase is a type of writing that combines word together to from one continous word
let links = document.querySelectorAll('.box a');
for(link of links){
    link.style.color = "red";
}
console.log(img.classList); // for check class
console.log(head.classList);
head.classList.add("headd"); // for add class
console.log(head.classList);
head.classList.remove("abc"); // use to remove class
console.log(head.classList);
console.log(head.classList.contains("headd")); // conntains check this class(given in the brackat) exists or not
console.log(head.classList.contains("grenn"));
console.log(head.classList.toggle("green")); // toggle use to check if class exists then it remove class and if class dose'nt exists then it add class
let box = document.querySelector(".box");
box.classList.add("bluebg");
//Navigation
let h4 = document.querySelector('h4');
console.log(h4.parentElement); // It show elements's parent elements and it always a single
console.log(box.children); // It show elements's child elements and it always one or more than one or mybe empty
console.log(box.childElementCount); // It show the total number of elements's children element
let ul = document.querySelector('ul');
console.log(ul.children[1].previousElementSibling); // it access privous sibling element  we can also change style by using this
console.log(ul.children[1].nextElementSibling); // it access next sibling element  we can also change style by using this
// Adding element
let newp = document.createElement('p'); // it is use to create an element in javascript
newp.innerText = "Hello! This is a new p";
let body = document.querySelector("body");
body.appendChild(newp); // this is use to add element on web page as child element here body is a parent element and newp is a child element
newp.append(" Here more text");
let btn = document.createElement('button');
let btnn = document.createElement('button');
let btnnn = document.createElement('button');
btn.innerText = "Click1";
btnnn.innerText = "Click3";
btnn.innerText = "Click2";
body.append(btnnn); // append can add more text in tag wich are alredy exist and also create a new element
newp.append(btnn);
box.prepend(btn); // It add element at starting
let nb1 = document.createElement('button');
let nb2 = document.createElement('button');
let nb3 = document.createElement('button');
let nb4 = document.createElement('button');
let nb5 = document.createElement('button');
let nb6 = document.createElement('button');
nb1.innerText = "nb1";
nb2.innerText = "nb2";
nb3.innerText = "nb3";
nb4.innerText = "nb4";
nb5.innerText = "nb5";
nb6.innerText = "nb6";
pera.insertAdjacentElement('beforebegin', nb1); // beforebegin add element Before the target element itself
pera.insertAdjacentElement('afterbegin', nb2); // afterbegin add element Just inside the target element bfore it's first element
pera.insertAdjacentElement('beforeend', nb3); // beforeend add element Just inside the target element after it's last element
pera.insertAdjacentElement('afterend', nb4); // afterend add element After the target element itself
pera.insertAdjacentElement('afterbegin', nb5);
pera.insertAdjacentElement('beforeend', nb6);
nb5.remove(); // remove() use to remove element
nb6.remove();