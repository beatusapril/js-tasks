/*
С помощью свойства __proto__ задайте прототипы так, чтобы поиск любого свойства
выполнялся по следующему пути: pockets → bed → table → head.
Например, pockets.pen должно возвращать значение 3 (найденное в table),
а bed.glasses – значение 1 (найденное в head).*/

let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__ : head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__ : table
};

let pockets = {
    money: 2000,
    __proto__ : bed
};

console.log(pockets.pen);

/*
У нас есть два хомяка: шустрый (speedy) и ленивый (lazy); оба наследуют от общего объекта hamster.
 Когда мы кормим одного хомяка, второй тоже наедается. Почему? Как это исправить?*/

let hamster = {

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    stomach: [],
    __proto__: hamster
};

let lazy = {
    stomach: [],
    __proto__: hamster
};

// Этот хомяк нашёл еду
speedy.eat("apple");
console.log( speedy.stomach ); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
console.log( lazy.stomach ); // apple
