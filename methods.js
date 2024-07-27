// first option to create and call methods
const calculator = {
    add: function(a, b){ // it creats add method
        return a+b; // it return add method result
    },
    sub: function(a, b){ // it creats sub method
        return a-b      // it return sub method result
    },
    mul: function(a, b){ // it creats mul method
        return a*b       // // it return mul method result
    },
    devide: function(a, b){ // it creats devide method
        return a/b          // it return devide method result
    }
}
console.log(calculator);
console.log(calculator.add); // it show add Method code
console.log(calculator.sub); // it show sub Method code
console.log(calculator.mul); // it show mul Method code
console.log(calculator.devide); // it devide add Method code
console.log(calculator.add(4, 8)); // it call add function 
console.log(calculator.sub(8, 4)); // it call sub function 
console.log(calculator.mul(4, 8)); // it call mul function 
console.log(calculator.devide(4, 8)); // it call devide function 

// second option to create and call methods
const calculator2 = {
    add(a, b){ // it creats add method
        return a+b; // it return add method result
    },
    sub(a, b){ // it creats sub method
        return a-b      // it return sub method result
    },
    mul(a, b){ // it creats mul method
        return a*b       // // it return mul method result
    },
    devide(a, b){ // it creats devide method
        return a/b          // it return devide method result
    }
}
console.log(calculator2);
console.log(calculator2.add); // it show add Method code
console.log(calculator2.sub); // it show sub Method code
console.log(calculator2.mul); // it show mul Method code
console.log(calculator2.devide); // it devide add Method code
console.log(calculator2.add(4, 8)); // it call add function 
console.log(calculator2.sub(8, 4)); // it call sub function 
console.log(calculator2.mul(4, 8)); // it call mul function 
console.log(calculator2.devide(4, 8)); // it call devide function

// Note : - Math object work on this phenomina
// Note : - Array and string methods work because array and string internally work as object