//functions
function addition(a,b){
    return Number(a)+Number(b);
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
    if(operator === '+'){
        return addition(a, b)
    }else if(operator === '-'){
        return subtraction(a,b)
    }else if(operator === 'x'){
        return multiplication(a,b)
    }
    else if(operator === '/'){
        return division(a,b)
    }
    else if(operator === '%'){
        return remainder(a,b)
    }
    else if(operator === '**'){
        return factorial(a,b)
    }
}

//DOMS
let displayText1 = ''
let displayText2 = ''
let operator = null
const display = document.querySelector('span')
const buttonContainer = document.querySelector('#button-container')
const enter = document.querySelector('#enter')
display.textContent = displayText1 //display empty container at program start

enter.addEventListener('click', (e) =>{
    let target = e.target
    //enter button to display calculated answer and reset displays/operators
    if(target.id === 'enter'){
        displayText1 = calculate(operator, displayText1, displayText2)
        display.textContent = displayText1
        operator = null
        displayText2 = ''
   }
})
//event delegation for buttons in container
buttonContainer.addEventListener('click', (e) =>{
    let target = e.target;
    //condition for display 1, before operator press
    if(operator === null){
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
        if(target.id === '+/-'){
            displayText1 = -displayText1
            display.textContent = displayText1
        }
    }else{//condition for display 2
        if(target.id < 10){
            displayText2 += target.id
            display.textContent = displayText2
        }else if(target.id === 'zero'){
            if(displayText2 != ''){
                displayText2 += '0'
                display.textContent = displayText2
            } //Doesn't add 0 to an empty container
        }
        if(target.id === '+/-'){
            displayText1 = -displayText2
            display,textContent = displayText2
        }
    }

    //clear everything, reset display
    if(target.id === 'clear'){
        displayText1 = ''
        displayText2 = ''
        operator = null
        display.textContent = displayText1
    }

    //button press events for operators
    if(target.id === '+' || target.id ===  '-' 
        || target.id ===  'x' || target.id ===  '/' 
        || target.id === '**' || target.id ==='%'){
        
            operator = target.id 
    }
})