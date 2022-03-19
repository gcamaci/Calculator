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
        if(arg1==='' && answer ==0){
            console.log("chose value first");
            operator = '';
        }else if(arg1 !== '' && arg2 !== ''){
            calculate(operator,arg1,arg2);
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
            console.log(button.value);
            arg1 += button.value;
            displayb.textContent = `${arg1}`
             
        }else{
            arg2 += button.value;
            displayb.textContent = `${arg1} ${operator} ${arg2} `
            
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
    if(b===0){
        console.log("cant divide by zero")
    }else{
        return answer = a / b;
    }
    
};
solution.addEventListener('click', () =>{
    calculate(operator,arg1,arg2);
    displayb.textContent = `${answer}`
    console.log(`${answer}`)
})
function clearDisplay (){
    displayb.textContent ="0"
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
        answer = add(num1,num2).toFixed(2);
    }else if(oper==='-'){
        answer = sub(num1,num2).toFixed(2);
    }else if(oper === '/'){
        answer = divi(num1,num2).toFixed(2);
    }else{
        answer = multi(num1,num2).toFixed(2);
    }
    arg1 = answer;
    arg2 = ''
    operator = '';
}