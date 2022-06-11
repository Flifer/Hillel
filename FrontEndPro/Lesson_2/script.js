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

function verification() {
    if (isNaN(operandA) || isNaN(operandB)) {
        alert("Only numbers, please")
    } else {
        calc()
    }
}

function calc() {
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

function add() {
    return given() + `${Number(operandA) + Number(operandB)}`}

function sub() {
    return given() + `${operandA - operandB}`}

function mult() {
    return given() + `${operandA * operandB}`}

function div() {
    return given() + `${operandA / operandB}`}

function given() {
    return `${operandA} ${operator} ${operandB} = `}