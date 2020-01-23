// 解構 (destructuring): 計算函式輸出的物件欄位
// 其餘 (rest): 將多餘的參數塞成陣列
const {low, high, ask, ...details} = ticker


// 深層解構 JSON
const {
    title,
    description,
    askingPrice,
    features: {
        area,
        bathrooms,
        bedrooms,
        amenities
    },
    contact: {
        name,
        phone,
        email
    }
} = response


// 賦予別名
const {
    title,
    description,
    askingPrice,
    features: {
        area,
        bathrooms,
        bedrooms,
        amenities
    },
    contact: {
        name: contactName, // 將冒號視為 as
        phone,
        email
    }
} = response


// 賦予別名並存取物件，可以列出同樣的特性兩次
const {
    title,
    description,
    askingPrice,
    features: {
        area,
        bathrooms,
        bedrooms,
        amenities
    },
    contact: responseContact,
    contact: {
        name: responseContactName,
        phone,
        email
    }
} = response


// 透過 展開(spread) 建立物件的淺複本
const faxCopy = {...fax}
// 第一個參數需傳入空物件，否則會被修改，展開運算子類似這個動作
const faxCopy = Object.assign({}, fax)
// 透過展開與新特性，覆寫原始物件的複本
const newCopy = {...fax, date: new Date()}
// 不需要依靠 Object.assign，較不抽象、容易閱讀，且不會修改任何東西
