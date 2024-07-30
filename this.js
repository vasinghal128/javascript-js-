const student = {
    name: "Vaibhav",
    age: 23,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg(){
        console.log(this); // this reffer to current object and here current object is student
        let avg = ( this.eng + this.math + this.phy )/3; // this.name means student.name
        console.log(`${this.name} got marks = ${avg}`);
    }
}
console.log(student.getAvg());
function avg(){
    console.log(this); // here it print window becuse window is a default object
}
console.log(avg());