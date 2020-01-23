// 嵌套結構是 "回呼地獄" 或 "Promise地獄" 這種複雜模式的根源
getProducts(products => {
    getProductPrices(products, prices => {
        getProductDetails({products, prices}, details => {
            // ...
        })
    })
})
// 參考父範圍變數，0: 函式上移，>1: 保持不變 或 傳遞參數
