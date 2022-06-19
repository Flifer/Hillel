alert(factorial(getNumber()))

function factorial(n) {
    if (n == 1 || n == 0) {
        return 1;
      } else {
        return n * factorial(n - 1);
    }
}

function getNumber() {
    let number
    do {
        number = Number(prompt('Choose the number', 5))
    } while (isNaN(number) ||  number < 0);
    return number
}


// ************************************************************//

// let myArray = [1, 56, 4, 22, 43];
// let n = Math.max(...myArray);
// console.log(n)


// ************************************************************//

// let myArray2 = [7, 5, 9, 32, 13];
// myArray2.sort((a, b) => a - b);
// console.log(myArray2[myArray2.length - 1])


// ************************************************************//