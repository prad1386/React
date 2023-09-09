const arr = [2,3,6,9,12,35];
const users = [
    {firstName:"Pradeep", lastName:"Kumar", age:35},
    {firstName:"Neelu", lastName:"Sharma", age:31},
    {firstName:"Anaisha", lastName:"Sharma", age:1},
    {firstName:"Akshaya", lastName:"kumar", age:25},
]

// map will transform and give new array
console.log(arr.map((x)=> x.toString(2)));



function isOdd(x){
    return x % 2;
}

function isEven(x){
    return (x % 2) === 0;
}

// filter will give new array of subset of original array
let output = arr.filter(isOdd);
console.log(output);


// reduce will give single output, iterate through the array and give single value i.e max,min number

let sum = arr.reduce((acc,curr)=>{
    acc = acc + curr;
    return acc;
},0);

console.log(sum);

// chaining, get firstname of person age>30
let output2 = users.filter(x=>x.age>30).map((x)=>x.firstName);
console.log(output2);

// using reduce
let output1 = users.reduce((acc,curr)=>{
    if(curr.age>30){
        acc=[...acc,curr.firstName];
        // acc.push(curr.firstName);
    }

    return acc;

},[]);

console.log(output1);