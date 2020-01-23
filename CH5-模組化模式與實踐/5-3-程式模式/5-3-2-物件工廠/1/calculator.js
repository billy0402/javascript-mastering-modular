const operations = []
let state = 0 // 共用狀態

export function add(value) {
    operations.push(() => {
        state += value
    })
}

export function multiply(value) {
    operations.push(() => {
        state *= value
    })
}

export function calculate() {
    operations.forEach(op => op())
    return state
}
