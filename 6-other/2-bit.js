// Напишите функцию isInteger(num), которая возвращает true, если num – целое число, иначе false.

function isInteger(num) {
    return ~~num === num;
}

console.log(isInteger(1)); // true
console.log(isInteger(1.5)); // false
console.log(isInteger(-0.5)); // false

// -----------------------------

let collator = new Intl.Collator("ru");

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

animals.sort(function (a, b) {
    return collator.compare(a, b);
});

console.log(animals);
