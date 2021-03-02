// Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b

function sum(a) {
    return function (b) {
        return a + b;
    }
}

console.log(sum(2)(3));

/*
Сделайте набор «готовых к употреблению» фильтров:

    inBetween(a, b) – между a и b (включительно).
inArray([...]) – находится в данном массиве.
    Они должны использоваться таким образом:

    arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива
Например:

    /!* .. ваш код для inBetween и inArray *!/
    let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2*/

function inBetween(from, to) {
    return function f(x) {
        return x >= from && x <= to;
    }
}

function inArray(arr) {
    return function f(x) {
        return arr.includes(x);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2*/

// отсортировать массив обьектов с помощью функции byField

let users = [
    {name: "John", age: 20, surname: "Johnson"},
    {name: "Pete", age: 18, surname: "Peterson"},
    {name: "Ann", age: 19, surname: "Hathaway"}
];

function byField(name) {
    return function (first, second) {
        return first[name] > second[name] ? 1 : -1;
    }
}

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));


// ---------------------------------------------------------------
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let number = i;
        let shooter = function () { // функция shooter
            console.log(number); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3.
