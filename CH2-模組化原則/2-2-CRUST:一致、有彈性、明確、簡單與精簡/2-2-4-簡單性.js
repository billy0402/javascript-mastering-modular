// 必須指定資源，url 是必要參數
const res = await fetch('api/users/john')
console.log(data.statusCode)
// <- 200

const data = res.json()
console.log(data.name)
// <- 'John Doe'

// 不一定改變 method，method 是選用參數，預設為 GET
await fetch('api/users/john', {
    method: 'DELETE'
})
