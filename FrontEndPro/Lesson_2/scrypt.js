calc()

function calc() {
    let result;
    let operator = prompt ("Choose an operator: +, -, *, /")
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
    let operandA = prompt ("Choose the first number")
    let operandB = prompt ("Choose the second number")
    if (isNaN(operandA) || isNaN(operandB)) {
        return "Only numbers, please";
    } else {
        return `${operandA} + ${operandB} = ` + `${Number(operandA) + Number(operandB)}`;
    }
}

function sub() {
    let operandA = prompt ("Choose the first number")
    let operandB = prompt ("Choose the second number")
    if (isNaN(operandA) || isNaN(operandB)) {
        return "Only numbers, please";
    } else {
        return `${operandA} - ${operandB} = ` + `${operandA - operandB}`;
    }
}

function mult() {
    let operandA = prompt ("Choose the first number")
    let operandB = prompt ("Choose the second number")
    if (isNaN(operandA) || isNaN(operandB)) {
        return "Only numbers, please";
    } else {
        return `${operandA} * ${operandB} = ` + `${operandA * operandB}`;
    }
}

function div() {
    let operandA = prompt ("Choose the first number")
    let operandB = prompt ("Choose the second number")
    if (isNaN(operandA) || isNaN(operandB)) {
        return "Only numbers, please";
    } else {
        return `${operandA} / ${operandB} = ` + `${operandA / operandB}`;
    }
}