const actions = ['+', '-', '*', '/'];

let operator;
    do {
        operator = prompt (`Choose an operator: ${actions.join(', ')}`, '*');
    } while (!actions.includes(operator));

let operandsCount;
    do {
        operandsCount = prompt ('Enter the amount of operands', '2');
    } while (operandsCount <= 1 || operandsCount > 5 || isNaN(operandsCount));

let operands = [];

while (operands.length < operandsCount) {
    operands.push(prompt ('Choose the number'));
}

for (i=0; i<operands.length; i++) {
    if (isNaN(operands[i])) {operands[i] = prompt('You failed 1 of numbers, rewrite it');
    }
}

calc();

function calc() {
    let result;
        switch (operator) {
            case '+':
            result = add();
            break;

            case '-':
            result = sub();
            break;

            case '*':
            result = mult();
            break;

            case '/':
            result = div();
            break;

            default:
            result = "ERROR on stage of choosing operator";
        }
    alert(result);
}

function add() {
    let add=0;
    for (i=0; i<operands.length; i++) {
    add += Number(operands[i]);
    } 
return given() + `${add}`;
}

function sub() {
    let sub = operands[0];
    for (i=1; i<operands.length; i++) {
    sub -= operands[i];
    } 
return given() + `${sub}`;
}

function mult() {
    let mult = operands[0];
    for (i=1; i<operands.length; i++) {
    mult *= operands[i];
    } 
return given() + `${mult}`;
}

function div() {
    let div = operands[0] ;
    for (i=1; i<operands.length; i++) {
    div = operands[0] /= operands[i];
    } 
return given() + `${div}`;
}

function given() {
    return `${operands.join(` ${operator} `)} = `;
}