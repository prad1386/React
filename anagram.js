// Since the given string ‘b’ contains all the characters in the string ‘a’ thus we will return True.
function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
    } else { 
       console.log("False");
    }
 }
 checkStringsAnagram("indian","ndiani");

 //Fibonacci
 function fibNaive(n) {
    if (n<= 1) return n;
    return fibNaive(n - 1) + fibNaive(n - 2);
 }

 for(let i = 0; i < 15; i++) {
    console.log(fibNaive(i));
}

//Unpaired element in an array
function solution(A) {
   return A.reduce((acc,curr)=>acc^curr,0);
}
//another way for unpaired
function pairing (A) {
   var s = new Set; 
   A.forEach(function(v) {
     s.delete(v) || s.add(v)
   });
 
   return s.values().next().value;
 }
 
 const arr = [1, 2, 5, 1, 2, 5, 7, 8, 7, 7, 8, 7, 1, 1, 3];
 console.log(pairing(arr));