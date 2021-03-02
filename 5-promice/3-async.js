//Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch
const fetch = require('node-fetch');

async function loadJson(url) { // (1)
    let response = await fetch(url); // (2)

    if (response.status === 200) {
        // (3)
        return await response.json();
    }

    throw new Error(response.status);
}

loadJson('https://github.com/beatusapril')
    .catch(console.log); /// Error: 404 (4)


//Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await вместо .then/catch.
// В функции demoGithubUser замените рекурсию на цикл: используя async/await, сделать это будет просто.

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
    //let name = prompt("Введите логин?", "iliakan");
    let name = 'beatusapril';

    while (true) {
        try {
            let user = await loadJson(`https://api.github.com/users/${name}`);
            console.log(`Полное имя: ${user.name}.`);
            return user;
        } catch (err) {
            if (err instanceof HttpError && err.response.status === 404) {
                console.log("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    }
}

demoGithubUser();

// -----------------------------------------
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    // ...что здесь написать?
    // чтобы вызвать wait() и дождаться результата "10" от async–функции
    // не забывайте, здесь нельзя использовать "await"
    wait().then(r => {
        console.log(r);
        return r;
    })
}

f();