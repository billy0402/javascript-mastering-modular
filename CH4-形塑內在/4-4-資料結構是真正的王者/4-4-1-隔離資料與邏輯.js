// 資料與邏輯糾纏不清，必須透過類別包裝輸入.取得輸出
class Value {
    constructor(value) {
        this.state = value
    }

    add(value) {
        this.state += value
        return this
    }

    multiply(value) {
        this.state *= value
        return this
    }

    valueOf() {
        return this.state
    }
}

console.log(+new Value(5).add(3).multiply(2)) // <- 16


// 單純用函式計算輸入的加法與乘法，不需要包裝輸入成類別實例
// 這些函式是冪等的，同樣的輸入會有同樣的輸出，容易理解與預測
function add(current, value) {
    return current + value
}

function multiply(current, value) {
    return current * value
}

console.log(multiply(add(5, 3), 2)) // <- 16
