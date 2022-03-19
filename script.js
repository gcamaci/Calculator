let operator = '';
let arg1 = '';
let arg2 = '';
let answer = 0;
const display = document.querySelector('display.num')
const clear = document.querySelector('#clear');
const solution = document.querySelector('#equals');
const operators = document.querySelectorAll('.operator');
operators.forEach((op) => {
    op.addEventListener('click',() => {
        if(arg1==='' && answer ==0){
            console.log("chose value first");
            operator = '';
        }else if(arg1 !== '' && arg2 !== ''){
            calculate(operator,arg1,arg2);
            operator = op.value;
            console.log(`${answer} ${operator}`)
        
        }else{
            operator = op.value;
            console.log(`${arg1} ${operator}`)

        }
    });
});

const buttons = document.querySelectorAll('.buttons');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(operator ===''){
            console.log(button.value);
            arg1 += button.value;
            console.log(`argument one: ${arg1}`); 
        }else{
            arg2 += button.value;
            console.log(`${arg1} ${operator} ${arg2} `);
        }
    });

});

function add (a,b){
    return answer = a + b;
};
function sub (a,b){
    return a - b;
}
function multi (a,b){
    return answer = a * b;
};
function divi(a,b){
    return answer = a / b;
};
solution.addEventListener('click', () =>{
    calculate(operator,arg1,arg2);
    console.log(`${answer}`)
})
function clearDisplay (){
    operator = '';
    arg1 = '';
    arg2 = '';
    answer = 0;
}
clear.addEventListener('click',clearDisplay);

function calculate (oper, argu1, argu2){
    let num1 = parseFloat(argu1);
    let num2 = parseFloat(argu2);
    if(oper === "+"){
        answer = add(num1,num2);
    }else if(oper==='-'){
        answer = sub(num1,num2);
    }
    arg1 = answer;
    arg2 = ''
    operator = '';
}