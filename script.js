let operator = '';
let arg1 = '';
let arg2 = '';


const buttons = document.querySelectorAll('.buttons');
const displayb = document.querySelector('.display-num')
const clear = document.querySelector('#clear');
const solution = document.querySelector('#equals');
const operators = document.querySelectorAll('.operator');
const backSpace = document.querySelector('.backspace');

/*anonymous function that calulates answer based off operator chosen by
user, arguments must be turned into integeres from string and then converted back
to string.  
*/
const calculate = () => {
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
        case 'x':
            answer = num1 * num2;
        break;
        case '/':
            answer = num1 / num2;
        break;
    }
    arg2 = '';
    arg1 = answer.toString();
    operator = '';

};
/*
    Choose operator used in keyboard and buttons
*/
const chooseOp = (oper) => {
    if(arg1===''){
        operator = '';
    }else if(arg1 !== '' && arg2 !== ''){
        calculate();
        operator = oper;
        displayb.textContent = `${arg1} ${operator}`
    }else{
        operator = oper;
        displayb.textContent = `${arg1} ${operator}`;
    }

};
/*
    takes input from key/btn and adds to current argument string
    cannot enter more than 11 digits.
*/
const chooseArgs = arg => {
    if(operator ===''){
        if(arg1.length <= 11){
            arg1 += arg;
            displayb.textContent = `${arg1}`
        }
    }else if(operator !== ''){
        if(arg2.length <= 11){
            arg2 += arg;
            displayb.textContent = `${arg1} ${operator} ${arg2} `;
        }
    }
};
/*
    bring in arg as string and compare to globals. Slice last digit in
    the string and display to display board.
*/
const deleteNum = () => {
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
};


/*
    Keyboard function
*/
document.addEventListener('keydown',(e) => {
    let keke = e.code.slice(-1,e.code.length);
    if (parseInt(keke) >= 0 && parseInt(keke) <= 10 || e.key === '.'){
        chooseArgs(e.key);
    }else if(e.key === '+'||e.key === "-" || e.key ==='/' ||e.key ==='x'){
        chooseOp(e.key);
    }else if (e.key === "Enter"){
        calculate();
        console.log(arg1)
        displayb.textContent = `${arg1}`
    }else if(e.key === 'Backspace'){
        deleteNum();
    }

    console.log(`i am arg1 ${arg1}`);
    console.log(`i am arg2 ${arg2}`);
    console.log(`i am ${operator}`);
    console.log(e);
    
});
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        chooseArgs(button.value)
    });
});
operators.forEach((op) => {
    op.addEventListener('click',() => {
        chooseOp(op.value);
    });
});
solution.addEventListener('click', () =>{
    calculate();
    displayb.textContent = `${arg1}`
    
})

backSpace.addEventListener('click', deleteNum);

clear.addEventListener('click', () => {
    displayb.textContent ="0"
    operator = '';
    arg1 = '';
    arg2 = '';
});
