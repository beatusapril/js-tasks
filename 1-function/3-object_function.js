// Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать значение:
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value.
// counter.decrease() должен уменьшать значение счётчика на 1.
function makeCounter() {
    let count = 0;

    // ... ваш код ...
    function cnt() {
        return count++;
    }

    cnt.set = value => count = value;

    cnt.decrease = () => count--;

    return cnt;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)