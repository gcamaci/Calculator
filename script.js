let operator = '';
let arg1 = '';
let arg2 = '';


const displayb = document.querySelector('.display-num')
const clear = document.querySelector('#clear');
const solution = document.querySelector('#equals');
const operators = document.querySelectorAll('.operator');

function calculate(){
    let num1 = parseFloat(arg1);
    let num2 = parseFloat(arg2);
    let answer = 0;
    switch(operator){
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
        break;
    }
    arg2 = ''
    arg1 = answer.toString();

};
const chooseOp = (e) => {
    if(arg1===''){
        operator = '';
    }else if(arg1 !== '' && arg2 !== ''){
        calculate();
        operator = e.target.value;
        displayb.textContent = `${arg1} ${operator}`
    }else{
        operator = e.target.value;
        displayb.textContent = `${arg1} ${operator}`;
    }

};
//for each op button check the globals and change the operator as needed
operators.forEach((op) => {
    op.addEventListener('click',chooseOp);
});

function chooseArgs(e){
    if(operator ===''){
        if(arg1.length <= 11){
            arg1 += e.target.value;
            displayb.textContent = `${arg1}`
        }
    }else if(operator !== ''){
        if(arg2.length <= 11){
            arg2 += e.target.value;
            displayb.textContent = `${arg1} ${operator} ${arg2} `;
        }
    }
};
//number buttons, creating argument 1 and 2. 
const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => {
    button.addEventListener('click', chooseArgs);
});
solution.addEventListener('click', () =>{
    calculate();
    displayb.textContent = `${arg1}`
})

clear.addEventListener('click', () => {
    displayb.textContent ="0"
    operator = '';
    arg1 = '';
    arg2 = '';
});

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

window.addEventListener('keydown',(e) => {
    console.log(e)
    console.log(e.key)
});
