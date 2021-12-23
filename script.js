let n = 100;

nextPrime:
    for (let i = 2; i <= n; i++) { // Для всех i...
        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j === 0) continue nextPrime; // не подходит, берём следующее
        }
        console.log(i); // простое число
    }
let numArray = [0, 2, 5, 7, 1]

function getMaxOfArray(numArray) {
    console.log(Math.max.apply(null, numArray))
}

getMaxOfArray(numArray)

let str = 'HelLo, wOrLD!'

function getStr(str) {
    if (str.length < 100) {
        console.log(str.toLowerCase().replace(/ /g, '%20'))
    } else {
        console.log('символов больше 100...')
    }
}

getStr(str)