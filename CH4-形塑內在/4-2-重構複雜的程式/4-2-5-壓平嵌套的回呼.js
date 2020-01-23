// 非同步的回呼地獄
a(function () {
    b(function () {
        c(function () {
            d(function () {
                console.log('hi!')
            })
        })
    })
})


// 為回呼命名，並消除嵌套
a(a1)

function a1() {
    b(b1)
}

function b1() {
    c(c1)
}

function c1() {
    d(d1)
}

function d1() {
    console.log('hi!')
}


// 需要父範圍的變數時，可以明確將參數傳給下一個回呼
a(a1)

function a1() {
    b(b1)
}

function b1() {
    c(c1)
}

function c1() {
    d(() => d1('hi!'))
}

function d1(salute) {
    console.log(salute)
}


// 使用 async 程式庫來簡化壓平嵌套鍊的程序
// async.series 會沿著工作函式陣列依序執行
async.series([
    next => setTimeout(() => next(), 1000),
    next => setTimeout(() => next(), 1000),
    next => setTimeout(() => next(), 1000)
], err = console.log(err ? 'failed' : 'done'))


// Promise 地獄
Promise.resolve(1).then(() =>
    Promise.resolve(2).then(() =>
        Promise.resolve(3).then(() =>
            Promise.resolve(4).then(value => {
                console.log(value) // <- 4
            })
        )
    )
)


// 使用類似樹狀結構的 Promise 解決嵌套問題
Promise.resolve(1)
    .then(() => Promise.resolve(2))
    .then(() => Promise.resolve(3))
    .then(() => Promise.resolve(4))
    .then(value => {
        console.log(value)
    })


// 使用 async 函式將 Promise流程 轉換成 一般程式的執行流程
async function main() {
    await Promise.resolve(1)
    await Promise.resolve(2)
    await Promise.resolve(3)
    const value = await Promise.resolve(4)
    console.log(value)
}
