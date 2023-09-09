
const array1 = [1,0,2,3,4,3,3,2,2,2,2,2,1,1];

const result1 = array1.filter((item, index) => array1.indexOf(item) === index)

console.log(result1)
const result = array1.reduce((x,v)=>{x[v]=x[v]?x[v]+1:1;return x;
    
},{});
console.log(result);
const keys = Object.keys(result)


const re = keys.filter((item)=>{
    return result[item]>1;
})

console.log(re)

// let obj ={};

// array1.forEach((item)=>{
//     if(obj[item]){
//         const val = obj[item];
//         obj[item] = val+1;
//     }else{
//         obj[item]=1;
//     }
    
// })

// console.log(obj);