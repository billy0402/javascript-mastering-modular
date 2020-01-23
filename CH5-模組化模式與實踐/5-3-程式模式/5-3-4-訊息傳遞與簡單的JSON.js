// ServiceWorker. web workers. 瀏覽器擴展程式.框架.API呼叫 或 WebSocket 集成
// 將類別實例序列化成原始物件，通常是 JSON，再將它傳到網路上
// 然而接收方卻無法將 JSON 反序列回類別實例
// 不如直接傳遞 JavaScript 物件，再透過 JavaScript 模組系統來處理它
class Person {
    constructor(name, address) {
        this.name = name
        this.address = address
    }

    greet() {
        console.log(`Hi! My name is ${this.name}.`)
    }
}

const rwanda = new Person('Rwanda', '123 Main st')
console.log(rwanda)
// <- Person { name: 'Rwanda', address: '123 Main st' }

const rwandaJSON = JSON.stringify(rwanda)
console.log(rwandaJSON)
// <- {"name":"Rwanda","address":"123 Main st"}
