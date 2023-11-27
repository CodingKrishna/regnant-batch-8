function add(x, y){
    console.log("x and y ", x, y);
    return parseInt(x) + parseInt(y);
};

function sub(x, y){

    return x - y;
}

function mul(x, y){

    return x * y;
}

function div(x, y){

    return x / y;
}

function calc(operation, x, y){
    console.log("Operation", operation);
    
    if(operation == "add"){
        return add(x,y);
    } else if(operation == "sub"){
        return sub(x,y);
    }else if(operation == "mul"){
        return mul(x,y);
    }else if(operation == "div"){
        return div(x,y);
    }
    return 0;
}
//module.exports = add; 
//module.exports = {"sum": add, "sub": sub, "mul":mul}; 
module.exports = calc;