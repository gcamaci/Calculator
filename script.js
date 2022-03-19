let operator = '';
let arg1 = '';
let arg2 = '';
let answer = 0;

const clear = document.querySelector('#clear');
const solution = document.querySelector('#equals');
const operators = document.querySelectorAll('.operator');
operators.forEach((op) => {
    op.addEventListener('click',() => {
        if(arg1==='' && answer ==0){
            console.log("chose value first");
            operator = '';
        }else if(arg1 !== '' && arg2 !== ''){
            let num1 = parseFloat(arg1);
            let num2 = parseFloat(arg2);
            answer = add(num1,num2);
            arg1 = answer;
            arg2 = ''
            operator = op.value;
            console.log(`${answer} ${operator} ${arg2}`);
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
function multi (a,b){
    return answer = a * b;
};
function divi(a,b){
    return answer = a /b;
};
solution.addEventListener('click', () =>{
    let num1 = parseFloat(arg1);
    let num2 = parseFloat(arg2);
    answer = add(num1,num2);
    arg1 = answer;
    arg2 = ''
    console.log(answer)
})
function clearDisplay (){
    operator = '';
    arg1 = '';
    arg2 = '';
    answer = 0;
}
clear.addEventListener('click',clearDisplay);

function calculate (){
    let num1 = parseFloat(arg1);
    let num2 = parseFloat(arg2);
    answer = add(num1,num2);
    arg1 = answer;
    arg2 = ''
    operator = op.value;
    console.log(`${answer} ${operator} ${arg2}`);

}