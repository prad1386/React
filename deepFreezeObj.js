const obj1 = { key1: "val1", 
key2: "val2", 
key3: ["val3", "val4", "val5"] 
};

const deepFreeze = (obj1) => {
Object.keys(obj1).forEach((property) => {
if (
typeof obj1[property] === "object" &&
!Object.isFrozen(obj1[property])
)
deepFreeze(obj1[property]);
});
return Object.freeze(obj1);
};
deepFreeze(obj1);

console.log("Before Change");
console.log(obj1);
obj1.key3[0] = "val";
obj1.key3[1] = "val";
obj1.key3[2] = "val";
console.log("After Change");
console.log(obj1);
