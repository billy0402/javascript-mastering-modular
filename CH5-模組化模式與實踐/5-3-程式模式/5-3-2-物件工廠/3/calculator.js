// 改成公開一個工廠函式
// 擁有自己的獨立範圍，在範圍內將相關狀態全部與外界隔絕，在從那個範圍回傳一個物件
export function getCalculator() {
    const operations = []

    function add(value) {
        operations.push(state => state + value)
    }

    function multiply(value) {
        operations.push(state => state * value)
    }

    function calculate() {
        return operations.reduce((result, op) =>
                op(result)
            , 0)
    }

    return {add, multiply, calculate}
}
