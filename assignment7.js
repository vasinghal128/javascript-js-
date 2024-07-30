
const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr){
        total += number;
        return total / arr.length;
    }
};
let arr = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(arr));
const isEven = (a) => {
    if(a%2==0){
        console.log(`${a} is an     even number`)
    }
    else{
        console.log(`${a} is not an even number`)
    }
}
console.log(isEven(8));
console.log(isEven(9));