const sum = function(a, b){ // here sum is a veriable name
    return a+b;
}
console.log(sum(2,3)) // here sum is a veriable name

let hello = function(){ // here hello is a veriable
    console.log("hii Vaibhav");
}
console.log(hello); // here hello is a veriable
console.log(hello()); // here hello is a veriable

hello = function(){  // Here we update function value like a veriable
    console.log("namaste Vaibhav")
}

console.log(hello); // here hello is a veriable
console.log(hello()); // here hello is a veriable