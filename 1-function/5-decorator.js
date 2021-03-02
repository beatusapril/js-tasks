// Создайте декоратор spy(func), который должен возвращать обёртку,
// которая сохраняет все вызовы функции в своём свойстве calls

function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

function spy(func) {
    wrapper.calls = [];

    function wrapper(...args) {
        wrapper.calls.push(args);
        func.apply(this, arguments)
    }

    return wrapper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}

// ------------------------------------------
// Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:
function f(x) {
    console.log(x);
}

function delay(f, ms) {
    return function d(...args) {
        return setTimeout(() => f.apply(this, args), ms);
    };
}

// создаём обёртки
let f1000 = delay(f, 7000);
let f1500 = delay(f, 12500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
// ------------------------------------------
/*
Результатом декоратора debounce(f, ms) должна быть обёртка,
которая передаёт вызов f не более одного раза в ms миллисекунд.
Другими словами, когда мы вызываем debounce, это гарантирует,
что все остальные вызовы будут игнорироваться в течение ms.*/

function debounce(func, ms) {
    let isFinishInterval = true;
    return function () {
        if (!isFinishInterval){
            return;
        }
        func.apply(this, arguments);
        isFinishInterval = false;
        setTimeout(() => isFinishInterval = true, ms);
    };
}

let f5 = debounce(f, 1000);

f5(1); // выполняется немедленно
f5(2); // проигнорирован

setTimeout(() => f5(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f5(4), 1100); // выполняется
setTimeout(() => f5(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
