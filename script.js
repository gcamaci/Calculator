let operator = '';
let arg1 = '';
let arg2 = '';
let answer = 0;


const displayb = document.querySelector('.display-num')
const clear = document.querySelector('#clear');
const solution = document.querySelector('#equals');
const operators = document.querySelectorAll('.operator');


//for each op button check the globals and change the operator as needed
operators.forEach((op) => {
    op.addEventListener('click',() => {
        if(arg1===''){
            operator = '';
        }else if(arg1 !== '' && arg2 !== ''){
            calculate(operator,arg1,arg2);
            arg1 = answer;
            arg2 = ''
            operator = op.value;
            displayb.textContent = `${answer} ${operator}`
        
        }else{
            operator = op.value;
            displayb.textContent = `${arg1} ${operator}`
            
        }
    });
});
//number buttons, creating argument 1 and 2. 
const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(operator ===''){
            if(arg1.length <= 11){
                arg1 += button.value;
                displayb.textContent = `${arg1}`
            }
        }else{
            if(arg2.length <= 11){
                arg2 += button.value;
                displayb.textContent = `${arg1} ${operator} ${arg2} `
            }
        }
    });
});
solution.addEventListener('click', () =>{
    calculate(operator,arg1,arg2);
    arg1 = answer;
    arg2 = ''
    operator = '';
    displayb.textContent = `${answer}`
    console.log(`${answer}`)
})

clear.addEventListener('click', () => {
    displayb.textContent ="0"
    operator = '';
    arg1 = '';
    arg2 = '';
    answer = 0;
});
function calculate(oper,argu1,argu2){
    let num1 = parseFloat(argu1);
    let num2 = parseFloat(argu2);
    switch(oper){
        case '+':
            answer = num1 + num2;
        break;
        case '-':
            answer = num1 - num2;
        break;
        case '*':
            answer = num1 * num2;
        break;
        case '/':
            answer = num1 / num2;
    }
};
const backSpace = document.querySelector('.backspace');
backSpace.addEventListener('click', () =>{
    arg1 = arg1.toString();
    if(arg1 !== '' && operator === '' && arg2 === ''){
        arg1 = arg1.slice(0,-1);
        displayb.textContent = arg1;

    }else if(arg1 !== '' && operator !== '' && arg2 === ''){
        operator = ''
        displayb.textContent = `${arg1} ${operator}`;

    }else if(arg1 !== '' && operator !== '' && arg2 !== ''){
        arg2 = arg2.slice(0,-1);
        displayb.textContent = `${arg1} ${operator} ${arg2}`;
    }
    console.log(arg1);
    console.log(arg2);
    console.log(operator);
});