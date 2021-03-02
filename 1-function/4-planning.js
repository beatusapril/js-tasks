/*Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.
Сделайте два варианта решения.
Используя setInterval.
Используя рекурсивный setTimeout*/

function printNumbers(from, to) {
    let number = from;
    let timerId = setInterval(function f() {
        console.log(number++);
        if (number > to){
            clearInterval(timerId);
        }
    }, 1000);
}

//printNumbers(3, 7);

function printNumbersRec(from, to) {
    let number = from;
    let timerId = setTimeout(function tick() {
        console.log(number++);
        setTimeout(tick, 1000);
        if (number > to){
            clearInterval(timerId);
        }
    }, 1000);
}

printNumbersRec(5, 10);