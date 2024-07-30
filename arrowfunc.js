const sum = (a, b) => { // if there is multiple argument then we compoulsary use peranthesis ( () )
    console.log(a+b);
}
const cube = n => { // when there is only single argument then we are able to not use peranthesis ( () )
    return n*n*n;
}
//const cube = (n) => { 
//     return n*n*n;
// }
const hello = () => { // if there is no argument then we compoulsary use peranthesis ( () )
    console.log("hello");
}
console.log(sum(4,5));
console.log(cube(5));
console.log(hello());
const mul = (a, b) => (
    a*b // it return multiply without return keyword and console.log()
);
console.log(mul(4, 4))

// this with arrow function
const student = {
    name:"Vaibhav",
    marks: 95,
    prop: this, // here this(this keyword) is globel scope
    getname: function(){ // for normal function this = object
        console.log(this);
        return this.name;
    },
    getmarks: ()=>{ // for arrow function this = parent's scope  = student's scope = window(this = window)
        console.log(this);
        return this.marks;
    },
    getinfo1:function(){
        setTimeout(function(){
            console.log(this); // Here this = window (this = current object = settimeout)
        },2000);
    },
    getinfo2:function() {
        setTimeout(() => {
            console.log(this); //Here this = student(this = parent's scope = ()=>(inner sr=ettimeout)'s parent scope = function's scope = object )
        },2000);
    }
};
console.log(student.getname());
console.log(student.getmarks());
console.log(student.getinfo1());
console.log(student.getinfo2());
 
// create a javascript function to calculate seqare using arrow function

const sequare = (n) => (n*n);
console.log(sequare(4));