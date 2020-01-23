/*
回呼函式:
很可靠，但想要並行執行工作時通常需要用到程式庫

Promise:
一開始可能難以理解，但是有一些工具可用，
例如: 並行工作使用的 Promise#all，只不過在某些情況下可能難以除錯

非同步函式:
需要習慣 Promise 的用法，但比較容易除錯，也通常可以產生比較簡單的程式，
而且很容易和同步函式穿插在一起

迭代器與產生器:
強大的工具，但沒有太多實際的使用案例，通常使用是符合需求，還是我們可以這樣做？
 */


// 時限到回傳 Promise
function delay(timeout) {
    const resolver = resolve => {
        setTimeout(() => {
            resolve()
        }, timeout)
    }

    return new Promise(resolver)
}

delay(2000)
    .then(() => console.log('finished'))


// Node.js 回呼函式 "Promise化"，讓它們回傳 Promise
// 函式以最後一個引數的接收錯誤優先回呼型函式
import {promisify} from 'util'
import {readFile} from 'fs'

const readFilePromise = promisify(readFile)
readFilePromise('./data.json', 'utf8')
    .then(data => {
        console.log(`Data: ${data}`)
    })


// 實作 promisify，將接收函式放入 Promise 流程
// 並回傳一個不同的、"Promise化" 的函式
// promisify.js
export default function promisify(fn) {
    return (...rest) => {
        return new Promise((resolve, reject) => {
            fn(...rest, (err, result) => {
                if (err) {
                    reject(err)
                    return
                }

                resolve(result)
            })
        })
    }
}

// 用法與 Node.js 原生的一樣，除了 import 改成自己的實作
import promisify from './promisify'
import {readFile} from 'fs'

const readFilePromise = promisify(readFile)
readFilePromise('./data.json', 'utf8')
    .then(data => {
        console.log(`Data: ${data}`)
    })


// 實作將 Promise 轉回 回呼函式
// 加入限制來處理滿足與拒絕兩種結果，並且呼叫 done，傳入相應的結果
function unPromisify(p, done) {
    p
        .then(
            data => done(null, data),
            error => done(error)
        )
}

unPromisify(delay(2000), err => {
    // ...
})
