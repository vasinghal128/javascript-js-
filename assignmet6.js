// Qs1.Write a JavaScript function that returns array elements larger than a number.
let arr = [10,20,50,88];
const maxarr = function(arr){
    let max = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max;
}
let r = maxarr(arr);
console.log(r);

// Q2 Write a JavaScript function to extract unique characters from a string . Example: str=“abcdabcdefgggh” ans=“abcdefgh”
let s = "abcdabcdefgggh";
function uniq(s){
    let ans="";
    for(let i=0;i<s.length;i++){
        let curr = s[i];
        if(ans.indexOf(curr) == -1){  // means if s[i] is not in then add in ans
            ans += curr;
        }
    }
    return ans;
}
let re = uniq(s);
console.log(re);

// Q3. Write a JavaScript function that accepts a list of country names as input and returns the longest country nameas output.Example : country=["Australia","Germany","United States of America"] output:"United States of America"
let co = ["Australia","Germany","United States of America"];
function longest(co){
    let max = 0;
    let lo = " ";
    for(let i=0;i<co.length;i++){
        if(co[i].length>max){
            max = co[i].length;
            lo = co[i];
        }
    }
    return lo;
}
let res = longest(co);
console.log(res);

// Qs4.Write a JavaScript function to count the number of vowels in a String argument. 
let ss = "vaibhavieeeouuss";
function vowel(s){
    let count = 0;
    for(let i=0;i<s.length;i++){
        if((s.charAt(i) == "a") || (s.charAt(i) == "e") || (s.charAt(i) == "i") || (s.charAt(i) == "o") || (s.charAt(i) == "u")){
            count ++;
        }
    }
    return count;
}
let resu = vowel(ss);
console.log(resu);

// Qs5.Write a JavaScript function to generatea random number within a range(start,end).
let start = 0;
let end = 100;
function random(start, end){
    let diff = end - start;
    let ran = Math.floor(Math.random()*diff) + start;
    return ran;
}
let result = random(start, end);
console.log(result);