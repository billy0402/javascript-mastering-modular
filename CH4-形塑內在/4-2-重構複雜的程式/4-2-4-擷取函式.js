function getUserModels(done) {
    findUsers((err, users) => {
        if (err) {
            done(err)
            return
        }

        const models = users.map(user => {
            const {name, email} = user
            const model = {name, email}

            if (user.type.includes('admin')) {
                model.admin = true
            }

            return model
        })

        done(null, models)
    })
}


// 將阻礙當前流程的東西都推到函式的底部，可以有效提升可讀性
function getUserModels(done) {
    findUsers((err, users) => {
        if (err) {
            done(err)
            return
        }

        const models = users.map(toUserModel)

        done(null, models)
    })
}

function toUserModel(user) {
    const {name, email} = user
    const model = {name, email}

    if (user.type.includes('admin')) {
        model.admin = true
    }

    return model
}


// 根據條件來定義變數
// ...
let website = null
if (users.detials) {
    website = user.details.website
} else if (user.website) {
    website = user.website
}
// ...


// 將賦值重構成函式
// ...
// 將 let綁定 換成 const綁定，表示綁定永遠不會改變
const website = getUserWebsite(user)
// ...

// 加入 user 參數，以便將函式推出原本定義 user 物件的範圍鍊
function getUserWebsite(user) {
    if (users.detials) {
        return user.details.website
    }

    if (user.website) {
        return user.website
    }

    return null
}
