module.factory('calculator', function (mathlib) {
    // ...
})

// 避免名稱衝突
module.factory('calculator', ['mathlib', function (mathlib) {
    // ...
}])
