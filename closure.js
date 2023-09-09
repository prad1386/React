// Function along with its lexical scope/environment makes a closure

function x(){
var a=10;

function y(){
   console.log(a);
}

a=100;
return y;

}


const z = x();
z();


//console out a=100;
// it rememeber the reference for the variable.