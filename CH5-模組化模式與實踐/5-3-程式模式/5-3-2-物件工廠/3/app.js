import {getCalculator} from './calculator.js'

const {add, multiply, calculate} = getCalculator()
add(3)
add(4)
multiply(-2)
calculate() // <- -14
