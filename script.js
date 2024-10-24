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
let displayText1 = ''
let displayText2 = ''
let operator = null
const display = document.querySelector('span')
const buttonContainer = document.querySelector('#button-container')
display.textContent = displayText1 //display empty container at program start

//event delegation for buttons in container
buttonContainer.addEventListener('click', (e) =>{
    let target = e.target;
    console.log(target.id)
    //button press events for numbers
    if(target.id < 10){
        displayText1 += target.id
        display.textContent = displayText1
    }else if(target.id === 'zero'){
        if(displayText1 != ''){
            displayText1 += '0'
            display.textContent = displayText1
        } //Doesn't add 0 to an empty container
    }
})