//foreach - elements
let arr = [1, 2, 3, 4, 5];
arr.forEach((el) => {
    console.log(el);
})

let print = function(el){
    console.log(el);
}
arr.forEach(print);
let arr1 = [{
    name:"vaibhav",
    marks: 68
},
{
    name:"Animesh",
    marks: 95
},
{
    name:"shivam",
    marks: 87
}];
arr1.forEach((student) => {
    console.log(student.marks);
})

// map = it takes every element and after perfoming actions it store values in new array
let num = arr.map((el) =>{ 
    return el*el;
});
console.log(num);
let gpa = arr1.map((el) =>{
    return el.marks/10;
});
console.log(gpa);

// filter - It sort elements from an array according to given condition and store in a nwe array
let ans = num.filter((el) =>{
    return el % 2 == 0 // even -> true and odd -> false
});
console.log(ans);
let even = [2, 4, 6, 8];
let odd = [1, 3, 5, 7];
let nums = [1, 2, 3, 4];
let str = "Vaibhav Singhal";

// Every(method name) return answer only in true or false for every element if there is one element return false then the answer is false
let r = arr.every((el) => {
    el%2 == 0;
});
console.log(r);
let re = even.every((el) => {
    return el%2 == 0;
});
console.log(re);

// Some(method name) return answer only in true or false for every element if there is one element return true then the answer is true
let rs = arr.some((el) => {
    el%2 == 0;
});
console.log(rs);
let res = even.some((el) => {
    return el%2 == 0;
});
console.log(res);

// reduce - reduces array to a single value
let finalvalue = nums.reduce((emo, el) =>{ 
        return emo + el;
})
// Here emo is accumlator with value is 0 and el is element and we return updated value according task assign between res and el here task is res = res + el

// steps
// 1. emo = 0 and el = 1 so emo = emo + el = 0 + 1 = 1 so emo = 1
// 1. emo = 1 and el = 2 so emo = emo + el = 1 + 2 = 3 so emo = 3
// 1. emo = 3 and el = 3 so emo = emo + el = 3 + 3 = 6 so emo = 6
// 1. emo = 6 and el = 4 so emo = emo + el = 6 + 4 = 1 so emo = 10
// and finally it return 10;
console.log(finalvalue);

let val = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2]
let maxval = val.reduce((max, el) => {
    if(max<el){
        return el;
    }
    else{
        return max;
    }
}) ;
console.log(maxval);

// practice q1 -> multiple of 10
let t = [1, 2, 3, 10, 20, 40];
let te = [10, 20, 30, 40];
let m = arr.every((el) => {
    el%2 == 0;
});
console.log(m);
let mu = even.every((el) => {
    return el%2 == 0;
});
console.log(mu);

// practice q2 -> find minimum number
let minval = val.reduce((min, el) => {
    if(min<el){
        return min;
    }
    else{
        return el;
    }
}) ;
console.log(minval);

// default perameter  and we use default perameter for last argument
function sum(a,b=3){ // Here b is a default perameter because there is b default value assign to b (b = 3)
    return a+b;
}
console.log(sum(5)); // it return 8 a=5 and b = 3(b default value)
console.log(sum(1,4)); // it return 5 because here it update b value to 4 so a=1 and b = 4 and a+b = 5

// spread(...) - Expands an itrable(array , string) into multiple values
console.log(nums);
console.log(...nums); // spread remove peranthesis when we print and give space between elements
console.log(Math.min(...nums));
console.log(str);
console.log(...str); // spread give space between chracters
// spread (Array Litrals)
let newarr = [...arr]; // spread help to copy an array to another array
console.log(newarr);
let char = [...str]; // spread help to store a string elements in an array with index
console.log(char);
let nu = [...odd, ...even]; // spread help to merge two array in another array
console.log(nu);
let nuu = [...even, ...odd]; // When we merge two array then order is matter now it print even first and odd last and in upperside it print odd first and even latter
console.log(nuu);
// spread (Object Literals)
const data = {
    email : "xyz@gmail.com",
    password: "abcd"
};
console.log(data)
const datacopy = {...data, id:123, country:"india"}; // spread can copy object to another object and also some elements in object
console.log(datacopy);
let obj1 = {...arr}; // spread can copy array elements in object and key are index number and values are elements
console.log(obj1);
let obj2 = {...str}; // spread can copy string characters in object and key are index number and values are characters
console.log(obj2);

//rest - it take multiple arguments
function sum(...args){
    return args.reduce((sum, el) => sum+el);
}
console.log(sum(4,18,22));
function min(msg, ...args){ // here first argument consider as a msg and left consider args
    console.log(msg);
    return args.reduce((min, el) => {
        if(min > el){
            return el;
        }
        else{
            return min;
        }
    });
};
console.log(min(12,20,25,13,48,50));
// destructuring 
let names = ["tony", "marsh", "kohli","ronaldo","mesii"];
let [winner, runnerup, secondrunnerup, ...others] = names; // here winner store 0th index of name, runnerup store 1st index of name, secondrunnerup store 2nd index of name, ...others store rest index of name
console.log(winner, runnerup, secondrunnerup, others);
// destructuring(objects)
const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "English", "Math", "Science"],
    username: "Karan124",
    password: "abcd",
    city: "Mathura" 
};
let {username, password, city:loc} = student; // here username serch same name key in object and store that's value and city store in loc
console.log(username, password, loc);