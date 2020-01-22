// 純函式: 函式的輸出完全由輸入決定，不考慮任何外部狀態，也不產生任何副作用
function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0)
}


// 在各函式呼叫之間保存狀態
let count = 0
// 不純函式，使用外部狀態 count，不受歡迎
// 副作用: 結果取決於外部環境，隨程式碼增加，潛在行為也會增加，變得難以預測
const increment = () => count++
export default increment


// 公開本身是 "純的" 工廠，即使回傳不純函式，也不會受到外部影響
const factory = () => {
    let count = 0
    const increment = () => count++

    return increment
}
export default factory
