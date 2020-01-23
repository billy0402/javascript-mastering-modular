// 遞增法 (additive): 編寫擴展函式，用新功能升級既有的物件，將功能組合起來
// 協助在任何物件加入事件發送功能，而不需要在物件原型鏈的某處加入 EventEmitter 類別
// 基礎類別不是自己寫的. 目標不是類別. 只想為類別的某些實例 加入功能時，特別實用
function makeEmitter(target) {
    const listeners = []

    // 為目標物件加入事件監聽器
    target.on = (eventType, listener) => {
        if (!(eventType in listeners)) {
            listeners[eventType] = []
        }

        listeners[eventType].push(listener)
    }

    // 指出事件類型以及想要傳給事件監聽器任意數量的參數
    target.emit = (eventType, ...params) => {
        if (!(eventType in listeners)) {
            return
        }

        listeners[eventType].forEach(listener => {
            listener(...params)
        })
    }

    return target
}

const person = makeEmitter({
    name: 'Artemisa',
    age: 27
})

person.on('move', (x, y) => {
    console.log(`${person.name} moved to [${x}, ${y}].`)
})

person.emit('move', 23, 5)
// <- 'Artemisa moved to [23, 5].'


// 不使用擴展函式，而是使用函式，不會修改目標物件
// 儲存目標物件，並對應至擁有的物件事件監聽器
const emitters = new WeakMap()

// 將事件監聽器指派給目標物件
function onEvent(target, eventType, listener) {
    if (!emitters.has(target)) {
        emitters.set(target, new Map())
    }

    const listeners = emitters.get(target)

    if (!(eventType in listeners)) {
        listeners.set(eventType, [])
    }

    listeners.get(eventType).push(listener)
}

// 觸發目標物件所有特定類型的事件監聽器，並傳送所有提供的參數
function emitEvent(target, eventType, ...params) {
    if (!emitters.has(target)) {
        return
    }

    const listeners = emitters.get(target)

    if (!listeners.has(eventType)) {
        return
    }

    listeners.get(eventType).forEach(listener => {
        listener(...params)
    })
}

const person = {
    name: 'Artemisa',
    age: 27
}

onEvent(person, 'move', (x, y) => {
    console.log(`${person.name} moved to [${x}, ${y}].`)
})

emitEvent(person, 'move', 23, 5)
// <- 'Artemisa moved to [23, 5].'
