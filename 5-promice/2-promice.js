/*Функция delay(ms) должна возвращать промис,
  который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:*/

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

delay(3000).then(() => console.log('выполнилось через 3 секунды'));