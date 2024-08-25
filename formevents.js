let form = document.querySelector("form");
form.addEventListener("submit", function(){ // submit use when we submit form and perform some action
    alert("Form submitted");
    console.log("formmm");
});
let fo = document.querySelector(".fo");
fo.addEventListener("submit", function(event){ // submit use when we submit form and perform some action
    event.preventDefault(); // it block go to next webpage
    alert("Form submitted");
    console.log("formmm");
    let inp = document.querySelector(".fo input");
    console.dir(inp);
    // extracting from data
    console.log(inp.value); // it(.value) print what we take input
    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    alert(`Hii ${user.value} your password is ${pass.value}`);
    console.dir(fo);
    console.log(fo.elements);
    console.log(fo.elements[0]); // it print form 1st element
    console.log(fo.elements[1]); // it print form 2nd element
    console.log(fo.elements[2]); // it print form 3rd element
    console.log(fo.elements[3]); // it print form 4th element
});
let use = document.querySelector("#user"); // it change value after if it doesn't match to previous we leave that element
user.addEventListener("change", function(){
    console.log("change evet");
    console.log("input changed");
    console.log("final value = ", this.value);
});
user.addEventListener("input", function(){ // it change value after enter every input or character
    console.log("input evet");
    console.log("input changed");
    console.log("final value = ", this.value);
});
let edit = document.querySelector(".edit");
let pera = document.querySelector("p");
edit.addEventListener("input", function(){
    console.log(edit.value);
    pera.innerText = edit.value;
});