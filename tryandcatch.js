console.log("hii");
console.log("hello");
try{ // try is use to identify error if any error in try block then we use catch to print anything after getting error if there is no error in try block then statement in try block run 
    console.log(a);
}
catch(err){ // We use catch to print anything after getting error here err is original error
    console.log("Get an error because a is not define"); // Here is an error so it print this
    console.log(err); // This print original erro
}
console.log("Namaste"); // useally after getting error rest of program will not execute but in try and catch after getting error rest of program will execute 
console.log("Namaste");