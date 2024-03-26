//Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.


let country:string = "pakistan" ;

//• Tests for equality and inequality with strings
console.log("i predict true " , country === "pakistan") ;
console.log("i predict False " , country !== "pakistan") ;

//• Tests using the lower case function
console.log("i predict true " , country.toLowerCase() === "pakistan") ;

//• Tests using the Upper case function
console.log("i predict true", country.toUpperCase() === "PAKISTAN") ;

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let x = 8 ;
let y = 4 ;
console.log("i predict False " , x === y) ;
console.log("i predict true " , x !== y) ;
console.log("i predict true " , x > y) ;
console.log("i predict False " , x < y) ;
console.log("i predict true " , x >= y) ;
console.log("i predict False " , x <= y) ;

//• Tests using "and" and "or" operators.
let cond1:boolean = true
let cond2:boolean = false 
console.log(cond1 && cond2) ;
console.log(cond1 || cond2) ;

//• Test whether an item is in a array
//• Test whether an item is not in a array 

let fullName:string[] = ["hammad","huzaifa","bilal","moiz"] ;

    // Test whether an item is not in a array
    console.log(fullName.includes('hammad')) ;
    console.log(fullName.includes('bilal')) ;

   