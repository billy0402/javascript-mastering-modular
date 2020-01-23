import {add, calculate} from './calculator.js'

add(3)
setTimeout(() => {
    add(4)
    calculate() // <- 14，因為 b.js 而多 7
}, 100)
