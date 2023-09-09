
let name = {
    firstName:"Pradeep",
    lastName:"Kumar"
}

let printName = function(state,country,continent){
    console.log(this.firstName+" "+this.lastName+" "+ state+" "+country+" "+continent);
}

let printMyName = printName.bind(name,"UP");

printMyName("India","Asia");

// Poylfill for bind  
Function.prototype.myBind = function(...args){
let obj = this;
let param = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...param,...args2]);
    }
}


let printMyName2= printName.myBind(name,"UP");
printMyName2("India","Asia");