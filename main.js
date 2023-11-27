
var sub = function(x, y){
    var z = x  - y;
    return z;
}

function calc(fun, a,b){
    var result = fun(a,b);
    return result;
}

var result = calc(function(x, y){
    var z = x  + y;
    return z;
}, 5,6);
console.log(result);


function f1(){
    console.log("inside f1 function");
    return function (x){
        console.log("Inside f1 inner function...", x)
        return x + x;
    }
}
var f2 = f1();
console.log(f2)
var result2 = f2(5);
console.log(result2)


var result3 = (function (x, y){
    var r = x + y;
    console.log("inside ...")
    return r;
})(6, 6);
console.log("result3 ", result3)

var sum = (x, y) => {
    var r = x  + y
    return r;
} ;
var result =sum(40,10);
console.log(result);
