//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

//Сделайте три варианта решения:
//1) С использованием цикла.
//2) Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// 3)  С использованием формулы арифметической прогрессии.

function sumToCycle(n) {
    var sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    console.log(sum)
}

sumToCycle(5);

function sumToRecursion(n) {
    return (n > 1) ? (n + sumToRecursion(n - 1)) : 1;
}

let sum = sumToRecursion(5);
console.log(sum);

function sumWithFormula(n) {
    return ((1 + n) / 2) * n;
}

sum = sumWithFormula(5);
console.log(sum);

// -----------------------------------
// Вычислить факториал

function factorial(n) {
    return (n > 1) ? n * factorial(n - 1) : n
}

let fctrl = factorial(4);
console.log(fctrl);

// ----------------------
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// 1, 1, 2, 3, 5, 8, 13, 21
// ------------------------------
function fib(n) {
    return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(7));

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

//Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.

function printListCycle(list) {
    let tmp = list;
    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

printListCycle(list);

function printListRecursion(list) {
    console.log(list.value);
    if (list.next) {
        printListRecursion(list.next)
    }
}

printListRecursion(list);

//  Вывод односвязного списка в обратном порядке

let listR = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListCycleReverse(list) {
    let tmp = list;
    let arr = [];
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    console.log("Reverse order");
    for (let i = arr.length-1; i >= 0 ; i--){
        console.log(arr[i]);
    }
}

printListCycleReverse(list);

function printListRecursionReverse(list) {
    // С помощью рекурсии
}

//printListRecursionReverse(list);
