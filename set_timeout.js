console.log("Hii ");
setTimeout(() => {
    console.log("Apna collage");
},4000); // In setTimeout first input is function and second input is time it alwayes take time in milisecond and alwayes multiply with 1000 to covert it second
// It print function value after 4 second(1s = 1000ms)(4s = 4000ms)

// set interval
let id = setInterval(() => {
    console.log("Apna collage");
},11000); // In setInterval first input is function and second input is time it alwayes take time in milisecond and alwayes multiply with 1000 to covert it second
// It print function value with multiple time after specific timeout(2000 milisecond = 2 second)
console.log(id); // it print setinterval id

let id2 = setInterval(() => {
    console.log("Hello world");
},12000); // In setInterval first input is function and second input is time it alwayes take time in milisecond and alwayes multiply with 1000 to covert it second
// It print function value with multiple time after specific timeout(2000 milisecond = 2 second)
console.log(id2); // it print setinterval id

clearInterval(id); // to stop interval

console.log("Welcom to ");

// PRACTICE question

let id3 = setInterval(() =>{
    console.log("Namaste world");
},2000);

setTimeout(() =>{
    clearInterval(id3);
},10000);