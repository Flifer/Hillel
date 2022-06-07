let operator = getOperator()
let operandA = getOperandA()
let operandB = getOperandB()

verification()

function getOperator() {
    return prompt ("Choose an operator: +, -, *, /")
}

function getOperandA() {
    return prompt ("Choose the first number")
}

function getOperandB() {
    return prompt ("Choose the second number")
}

function verification(operandA, operandB) {
    if (isNaN(operandA) || isNaN(operandB)) {
        alert("Only numbers, please")
    } else {
        calc(operandA, operator, operandB)
    }
}

function calc(operandA, operator, operandB) {
    let result;
        switch (operator) {
            case '+':
            result = add(operandA, operandB);
            break;

            case '-':
            result = sub(operandA, operandB);
            break;

            case '*':
            result = mult(operandA, operandB);
            break;

            case '/':
            result = div(operandA, operandB);
            break;

            default:
            result = "ERROR on stage of choosing operator";
        }
    alert(result)
}

function add(operandA, operandB) {
    return given() + `${Number(operandA) + Number(operandB)}`}

function sub(operandA, operandB) {
    return given() + `${operandA - operandB}`}

function mult(operandA, operandB) {
    return given() + `${operandA * operandB}`}

function div(operandA, operandB) {
    return given() + `${operandA / operandB}`}

function given(operandA, operator, operandB) {
    return `${operandA} ${operator} ${operandB} = `}