const actions = ['+', '-', '*', '/'];

let operator = getOperator()

let operandsCount = getOperandsCount()

let operands = getOperands()

calc();

function getOperator() {
    let op;
        do {
            op = prompt (`Choose an operator: ${actions.join(', ')}`, '*');
        } while (!actions.includes(op));
    return op
}

function getOperandsCount() {
   let opCount;
        do {
            opCount = prompt ('Enter the amount of operands', '2');
        } while (opCount <= 1 || opCount > 5 || isNaN(opCount));
    return opCount; 
}

function getOperands() {
    let operands = [];
        while (operands.length < operandsCount) {
            operands.push(getOperand());
        }
    return operands;
}

function getOperand() {
    let operand
        do {
            operand = prompt('Choose the number')
        } while (isNaN(operand));
    return operand
}

function calc() {
    let result;
    let startNum = Number(operands[0])
    for (i=1; i<operands.length; i++) {
        switch (operator) {
            case '+':
            result = given() + `${startNum += Number(operands[i])}`;
            break;

            case '-':
            result = given() + `${startNum -= operands[i]}`;
            break;

            case '*':
            result = given() + `${startNum *= operands[i]}`;
            break;

            case '/':
            result = given() + `${startNum /= operands[i]}`;
            break;

            default:
            result = "ERROR on stage of choosing operator";
        }
    } 
    alert(result);
}

function given() {
    return `${operands.join(` ${operator} `)} = `;
}
