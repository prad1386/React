const name = {
    firstName : "Pradeep",
    lastName : " Kumar",
    
}

const printFullName = function(state , country){
    return this.firstName + this.lastName + state + country;
}

console.log(printFullName.call(name, " UP", " India"));


const name2 = {
    firstName: "Neelu",
    lastName: " Sharma"
}

// Call is also called as function borrowing
console.log(printFullName.call(name2, " UK", " India"));


// Apply we pass arguments as array

console.log("====Apply====");
console.log(printFullName.apply(name2, [" UK", " India"]));


// Bind is creating new copy of the method & use it later, doesn't call immmediatly
let printName = printFullName.bind(name2, " UK", " India");

console.log(printName());
