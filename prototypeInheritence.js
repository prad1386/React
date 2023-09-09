//every Obect has prototype property in it. 
// When new object is created it inherit from parent. All 1000+ functions properties are availble to child object

let car = function(model){
    this.model=model;
}

car.prototype.getModel=function(){
    return this.model
}

let toyota = new car("toyota");

console.log(toyota.getModel())

let nissan = new car("nissan");

console.log(nissan.getModel());


//Return number of arguments for function without loops
let x = function(){
    return [].slice.call(arguments).length;
}

console.log(x(1,2,3,4,5))