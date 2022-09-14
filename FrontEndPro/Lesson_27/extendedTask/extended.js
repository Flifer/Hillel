let regexp1 = /love/
alert( regexp1.test('I love JavaScript') ); // true

alert( regexp1.test('I JavaScript') ); // false

let regexp2 = /ing$/

alert( regexp2.test('Good morning') ); // true

alert( regexp2.test('Good morning!') ); // false