//Write a JavaScript function to check whether an `input` is an array or not.
var is_array = (input) => {
  if (toString.call(input) === "[object Array]") return true;
  return false;
};
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 4, 0]));
/////////////////////////////////////////////////////////////////

//clone an array
const a = [1, 2, [3, 4]];

const b = [...a];
const c = a.slice(0);
let y1 = x.slice();
let y2 = Array.from(x);
const y3 = x.filter(() => true);
const y4 = x.map((i) => i);

/////////////////////////////////////////////////////////////////
//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
var first = function (array, n) {
  if (array == null) return void 0;
  if (n == null) return array[0];
  if (n < 0) return [];
  return array.slice(0, n);
};

//myColor = ["Red", "Green", "White", "Black"];
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join("+"));
//Red,Green,White,Black
//Red,Green,White,Black
//Red+Green+White+Black

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
var num = window.prompt();
var str = num.toString();
var result = [str[0]];

for (var x = 1; x < str.length; x++) {
  if (str[x - 1] % 2 === 0 && str[x] % 2 === 0) {
    result.push("-", str[x]);
  } else {
    result.push(str[x]);
  }
}
console.log(result.join(""));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Returns an object with the unique values of an array as keys and their frequencies as the values.
const frequencies = (array) =>
  array.reduce((x, v) => {
    x[v] = x[v] ? x[v] + 1 : 1;
    return x;
  }, {});

console.log(frequencies(["x", "y", "x", "z", "x", "x", "y"]));
// [object Object] {
//     x: 4,
//     y: 2,
//     z: 1
//   }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Sort an Array
const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(arr1.sort((a, b) => a - b));
//-4,-3,1,2,3,5,6,7,8asx

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//multiply all in an array
console.log([1, 2, 3].reduce((a, b) => a * b));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//// a sample 2-D array
const a1 = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (const i in a) {
  console.log(`row ${i}`);
  for (const j in a[i]) {
    console.log(` ${a[i][j]}`);
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Swap two variable without third
let x = 10,
  y = 5;

x = x + y;
y = x - y;
x = x - y;

/////////////////////////////////////////////////////
// shuffle an array
function shuffle(arra1) {
  let ctr = arra1.length;
  let temp;
  let index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}
const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Unique items in an array
const result = array1.filter((item, index) => array1.indexOf(item) === index);

console.log([...new Set(array)]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
