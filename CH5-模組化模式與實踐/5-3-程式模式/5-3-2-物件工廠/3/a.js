import {getCalculator} from './calculator.js'

const {add, calculate} = getCalculator()
add(3)
setTimeout(() => {
    add(4)
    calculate() // <- 7
}, 100)
