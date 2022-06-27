function createCalculator(base) {
    return {
        add: (addNum) => {
            if (!isNaN(addNum)) {
                base += addNum;
            } else base
        },
        sub: (subNum) => {
            if (!isNaN(subNum)) {
                base -= subNum;
            } else base
        },
        set: () => {
            do {
                base = Number(prompt('Choose new base Number', 5))
            } while (isNaN(base));
        },
        get: () => base,
    };
}

const calculator = createCalculator(Number(prompt('Choose base Number', 5)));
// calculator.add(10);
// calculator.sub(20);
// calculator.set();
// calculator.add('qwe');
// console.log(calculator.get())

