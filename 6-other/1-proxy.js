/*Обычно при чтении несуществующего свойства из объекта возвращается undefined.
Создайте прокси, который генерирует ошибку при попытке прочитать несуществующее свойство.
Это может помочь обнаружить программные ошибки пораньше.
Напишите функцию wrap(target), которая берёт объект target и возвращает прокси,
добавляющий в него этот аспект функциональности.*/

let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        get(target, prop, receiver) {
            if (prop in target) {
                return Reflect.get(target, prop, receiver);
            } else {
                throw new ReferenceError(`Свойство не существует: "${prop}"`)
            }
        }
        /* ваш код */
    });
}

user = wrap(user);

console.log(user.name); // John
//console.log(user.age); // Ошибка: такого свойства не существует

// ----------------------------
/*Другими словами, array[-N] – это то же, что и array[array.length - N].
Создайте прокси, который реализовывал бы такое поведение.
Вот как это должно работать:*/
let array = [1, 2, 3];

array = new Proxy(array, {
    get(target, p, receiver) {
        if (p < 0) {
            p = target.length + +p;
        }
        return Reflect.get(target, p, receiver);
    }
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2

// Создайте функцию makeObservable(target), которая делает объект «наблюдаемым», возвращая прокси.

function makeObservable(target) {
    return new Proxy(target, {
        set(target, p, receiver){
            target.observe.apply(arguments)
        }
    });
}

user = {};
user = makeObservable(user);

user.observe((key, value) => {
    alert(`SET ${key}=${value}`);
});

user.name = "John"; // выводит: SET name=John
