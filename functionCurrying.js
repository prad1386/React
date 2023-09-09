// Function currying using closure
let curry = function(a){
    return function(b){
        return(a+b);
    }
}

let curryRecursive = function(a){
    return function(b){
        return b ?  curryRecursive(a+b) : a;
    }
}

let curryArrow = (a)=>(b)=> b? curryArrow(a+b):a;

console.log(curry(3)(4));

console.log(curryRecursive(3)(4)(5)(6)());

console.log(curryArrow(3)(4)(5)(6)());



// Function currying using bind method

let multiply = function(x,y){
    return(x*y);
}

let multiplyByTwo = multiply.bind(this,2);

console.log(multiplyByTwo(3));