// 公開物件的所有內容，包括私有特性
const counter = {
    _state: 0,
    increment() {
        counter._state++
    },
    decrement() {
        counter._state--
    },
    read() {
        return counter._state
    }
}
export default counter


// 僅公開可以公開的特性和方法
const counter = {
    _state: 0,
    increment() {
        counter._state++
    },
    decrement() {
        counter._state--
    },
    read() {
        return counter._state
    }
}
const {increment, decrement, read} = counter
const api = {increment, decrement, read}
export default api


// 改用 closure 的等效元件
(function () {
    const counter = {
        _state: 0,
        increment() {
            counter._state++
        },
        decrement() {
            counter._state--
        },
        read() {
            return counter._state
        }
    }
    const {increment, decrement, read} = counter
    const api = {increment, decrement, read}

    return api
})()
