let students = ["vaibhav","shivam","animesh","madhav"]; 
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(typeof students);
let info = ["Aman",25,6.1];
let emp = [];
console.log(emp);
console.log(info);
console.log(info.length);
console.log(info[0]);
console.log(info[0][2]); // it print 2th index character of 0th index word;
let na = "rohit";
console.log(na);
na[0] = 'm'; // it can't change 
console.log(na);
let fruits = ["Mango","Apple","litchi"];
console.log(fruits);
fruits[0] = "Guava"; // in array It replace Guava From Mango
console.log(fruits);
fruits[10] = "grappes"; // In fruits array it add at index 10
console.log(fruits);
let car = ["Audi" , "Bmw", "Mercedes"];
console.log(car);
car.push("Land rover"); // It add landrover at the end
console.log(car);
car.push("Kia");
console.log(car);
car.pop(); // It delete last element of car array
console.log(car);
car.unshift("Kia"); // It add kia at start in car array
console.log(car);
car.shift(); // It delete kia at start in car array
console.log(car);
console.log(car.indexOf("Bmw")); // It retuen Bmw index in car array
console.log(car.indexOf("maruti"));
console.log(car.includes("Audi"));
console.log(car.includes("Toyota"));
let other = ["Toyota", "Tata", "Mahindra"];
console.log(car.concat(other)); // It concat car and other array
console.log(car);
console.log(other);
let all = car.concat(other);
console.log(all);
other.reverse(); // It reverse array
console.log(other);
console.log(all.slice()); // It copy whole all(array name) array
console.log(all.slice(2)); // it copy all(array name) array from index 2 to end
console.log(all.slice(2,5)); // it copy all(array name) array from index 2 to index 4(5-1(end-1))
console.log(all.slice(-2)); // // it copy all(array name) array from index length-2(lenght-n) to end
console.log(all.slice(8)); // it give empty array
let col =["Red", "Yellow", "Blue", "Orange", "Pink", "White"];
console.log(col.splice(4)); //it remove elements start from 4 and end to last from col array
console.log(col);
console.log(col.splice(0,1)); // it remove elements start from 0 and end to 1 from col array
console.log(col);
console.log(col.splice(0,1,"black","gray")); // it add gray and black respcative position(0) and 1 for we delete element from index 1 or if we wo,t delete any element we wtite 0
console.log(col);
all.sort(); // it sort all (array name ) array 
console.log(all);
arr = ['a','b','c'];
arrcopy = ['a','b','c'];
console.log(arr==arrcopy); // It return false because both array locations are diffrent
console.log(arr===arrcopy); // It return false because both array locations are diffrent
arr.push('d');
console.log(arr); // There is change on arr
console.log(arrcopy); // But There is no change on arrcopy beacuse it has diffrent location compare to arr
arrcopy.push('e');
console.log(arr); //There is no change on arr beacuse it has diffrent location compare to arrcopy
console.log(arrcopy); // There is change on arrcopy 
arrcopy = arr;
console.log(arr==arrcopy); // It return True because both array locations are same(arrcopy = arr;)
console.log(arr===arrcopy); // It return True because both array locations are same(arrcopy = arr;)
arr.push('d');
console.log(arr); // There is change on arr
console.log(arrcopy); // But There is also change on arrcopy beacuse it has same location compare to arr (arrcopy = arr;)
arrcopy.push('e');
console.log(arr); //There is also change on arr beacuse it has same location compare to arrcopy (arrcopy = arr;)
console.log(arrcopy); // There is change on arrcopy
const arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);
// arr1 = [1, 2, 3]; it gives TypeError: Assignment to constant variable. because we alredy declare arr1 as constant array and if we declare any arr constant we can't make another one and overwritre this
let nums = [[2, 4], [3, 6], [4, 8]]; // It is a mehod to create a nested array
console.log(nums);
console.log(nums.length); // it give nested array length
console.log(nums[0]); // it returns nested array oth index [2, 4]
console.log(nums[1]);// it returns nested array 1st index [3, 6]
console.log(nums[2]);// it returns nested array 2nd index [4, 8]
console.log(nums[0][0]); // it returns nested array oth index of oth index 2
console.log(nums[0][1]); // it returns nested array 1st index of oth index 4
console.log(nums[1][0]); // it returns nested array oth index of 1st index 3
console.log(nums[1][1]); // it returns nested array 1st index of 1st index 6 
console.log(nums[2][0]); // it returns nested array oth index of 2nd index 4 
console.log(nums[2][1]); // it returns nested array 1st index of 2nd index 8
let tic = [['x', null , 'o'], [null, 'x' , null], ['o', null , 'x']];
console.log(tic)