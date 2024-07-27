const student = {         // it is method to create object
    name: "Vaibhav",      // here name is key and vaibhav is value
    age: 23,
    marks:94.4,
    city: "Bharatpur"
};
console.log(student);  // There is no order of print object element 
const items = {
    price: 100.99,
    discount: 50,
    color: ["red", "pink"]
}
console.log(items);
console.log(items["price"]); // it print price value
console.log(items.price); // it print price value
console.log(items.color[0]); // it print color value wich store at 0th index
console.log(typeof(price));
student.city = "jaipur"; // it update city value in student object
student.roll = 64;
student.gender = "Male"; // it add gender in student object
student.marks = "A"; // it update marks value number to string in student object
console.log(student);
delete student.roll; // it delete roll in student object
console.log(student);
// nested object or object of object
const classinfo = {
    Harsh:{
        grade:"A+",
        city:"Renukoot"
    },
    vaibhav:{
        grade:"A",
        city:"Bharatpur"
    },
    Aarsh:{
        grade:"o",
        city: "Varanasi"
    }
}
console.log(classinfo);
console.log(classinfo.vaibhav.city);
// Array of objects
const studentinfo = [ // this is an array
    { // this is an object
        name:"Harsh",
        grade:"A+",
        city:"Renukoot"
    },
    {
        name:"Vaibhav",
        grade:"A",
        city:"Bharatpur"
    },
    {
        name:"Aarsh",
        grade:"o",
        city: "Varanasi"
    }
]
console.log(studentinfo);
console.log(studentinfo[1]);
console.log(studentinfo[1].city); // it print studentinfo array object wich store at index 1 city
studentinfo[1].gender = "Male"; // it add gender an its value at object wich store in index 1 in studentinfo array 
console.log(studentinfo[1]);
// Math object
console.log(Math); // It print all math methods
console.log(Math.PI); // It print PI value
console.log(Math.E); // It print constant value
console.log(Math.abs(-5)); // It print alwayes postivite number however the input is negetive it convert and print negetive to positive
console.log(Math.abs(5)); // It print alwayes postivite number however the input is negetive it convert and print negetive to positive
console.log(Math.pow(2,5)); // It print 5 power of 2
console.log(Math.pow(5,2)); // It print 2 power of 5
console.log(Math.floor(5)); // It print nearast value(one smallest)(5)
console.log(Math.floor(3.2)); // It print nearast value(one smallest)(3) 
console.log(Math.floor(5.9999)); // It print nearast value(one smallest)(5)
console.log(Math.floor(4.5)); // It print nearast value(one smallest)(4)
console.log(Math.floor(-5.2)); // It print nearast value(one smallest)(-6)
console.log(Math.ceil(5)); // It print nearast value(one biggest)(5)
console.log(Math.ceil(5.2)); // It print nearast value(one biggest)(6)
console.log(Math.ceil(5.5)); // It print nearast value(one biggest)(6)
console.log(Math.ceil(-5.9)); // It print nearast value(one biggest)(-5)
console.log(Math.ceil(5.9)); // It print nearast value(one biggest)(6)
console.log(Math.random()); // It print random value between 0 to 1 except 1
console.log(Math.random()); // It print random value between 0 to 1 except 1
console.log(Math.random()); // It print random value between 0 to 1 except 1 
console.log(Math.random()); // It print random value between 0 to 1 except 1
// Random number between 1 to n
let step1 = Math.random();
let step2 = step1*10; //(step1*n)(Math.random()*n) n is a range (example 10) 
let step3 = Math.floor(step2); // to remove decimal and after decimal value
let step4 = step3 + 1; // we want number between 1 to 10 and Math.random() give 0 to 0.9(9) so we do this step for convert 0 to 1 and 9 to 10 
console.log(`Random number is ${step4}`);
console.log(`Random number between 1 to 100 is ${Math.floor(Math.random()*100)+1}`); 
console.log(`Random number between 21 to 25 is ${Math.floor(Math.random()*5)+21}`); // 5 for end at 25 or 24 and 21 for 21 for start at 21 and end at 25
console.log(`Random number between 21 to 24 is ${Math.floor(Math.random()*5)+20}`); // 5 for end at 25 or 24 and 21 for 20 for start at 20 and end at 24
