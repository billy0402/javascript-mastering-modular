// (改善) 不使用 state 變數，而是在運算程式之間傳遞狀態
// 讓每個運算知道目前狀態，並對它執行任何必要的改變
// state 永遠被設為 0，也將不相關的操作視為整體的一部分，操作仍然錯誤
const operations = []

export function add(value) {
    operations.push(state => state + value)
}

export function multiply(value) {
    operations.push(state => state * value)
}

export function calculate() {
    return operations.reduce((result, op) =>
            op(result)
        , 0)
}
