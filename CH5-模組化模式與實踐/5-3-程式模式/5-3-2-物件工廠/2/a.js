import {add, calculate} from './calculator.js'

add(3)
setTimeout(() => {
    add(4)
    calculate() // <- 9，從 b.js 多 2
}, 100)
