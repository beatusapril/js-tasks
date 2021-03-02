// Добавьте всем функциям в прототип метод defer(ms), который вызывает функции через ms миллисекунд.
function f() {
    console.log("Hello!");
}

Function.prototype.defer = function defer(ms) {
    setTimeout(this, ms);
};

//f.defer(1000); // выведет "Hello!" через 1 секунду

/*
Добавьте всем функциям в прототип метод defer(ms),
который возвращает обёртку, откладывающую вызов функции на ms миллисекунд.*/

Function.prototype.deferWr = function deferWr(ms) {
    let f = this;
    return function (...args) {
        return setTimeout(() => f.apply(this, args), ms);
    };
};

function func(a, b) {
    console.log(a + b);
}

//func.deferWr(1000)(1, 2); // выведет 3 через 1 секунду.

// Добавьте toString в словарь

let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.keys(this).join();
        }
    }
});

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary); // "apple,__proto__"
