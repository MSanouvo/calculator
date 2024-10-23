//functions
function addition(a,b){
    return a+b;
};

function subtraction(a,b){
    return a-b;
};

function multiplication(a,b){
    return a*b;
};

function division(a,b){
    if(b ===0){
        return "Error: Can't divide by 0";
    }else{
        return a/b;
    }
}

function remainder(a,b){
    return a%b;
}

function factorial(a,b){
    return a**b;
}

function calculate(operator, a, b){
    return operator(a,b);
}

console.log(calculate(factorial, 2, 3))

//DOMS

const display = document.querySelector('span')
display.textContent = 'Test'