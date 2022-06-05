let operator = prompt ("Choose an operator: +, -, *, /")
let operandA = prompt ("Choose the first number")
let operandB = prompt ("Choose the second number")
verification()

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
            result = "ERROR on stage of choosing operator"
        }
    alert(result)
}

function add() {
    return `${operandA} + ${operandB} = ` + `${Number(operandA) + Number(operandB)}`}

function sub() {
    return `${operandA} - ${operandB} = ` + `${operandA - operandB}`}

function mult() {
    return `${operandA} * ${operandB} = ` + `${operandA * operandB}`}

function div() {
    return `${operandA} / ${operandB} = ` + `${operandA / operandB}`}