// let 或 var 綁定可能被修改
// ...
let type = 'contributor'
if (user.adminstrator) {
    type = 'adminstrator'
} else if (user.role.includes('edit_articles')) {
    type = 'editor'
}
// ...


// 預設使用 const，表示綁定不會被重新指派
// ...
const type = getUserType(user)
// ...

function getUserType(user) {
    if (user.adminstartor) {
        return 'adminstrator'
    }
    if (user.roles.includes('edit_articles')) {
        return 'editor'
    }

    return 'contributor'
}


// 將操作拆成好幾行，並把結果重複指派給同個綁定
let values = [1, 2, 3, 4, 5]
values = values.map(value => value * 2)
values = values.filter(value => value > 5)
console.log(values)
// <- [ 6, 8, 10 ]


// (改善) 避免重新賦值，並改用鏈結
const finalValues = [1, 2, 3, 4, 5]
    .map(value => value * 2)
    .filter(value => value > 5)
console.log(finalValues)
// <- [ 6, 8, 10 ]


// (最佳) 每次都建立新的綁定，根據上個綁定來計算結果
// 並且使用 const，確保後續程式中不會再被改變
const initialValues = [1, 2, 3, 4, 5]
const doubleValues = initialValues.map(value => value * 2)
const finalValues = doubleValues.filter(value => value > 5)
console.log(finalValues)
// <- [ 6, 8, 10 ]
