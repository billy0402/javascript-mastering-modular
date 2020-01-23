// 相較於編寫較不緊湊的程式，大量正確命名變數與函式可以提升可讀性
// 檢查使用者是否以有效的 session 登入
function aBigFunction() {
    // ...
    if (
        auth !== undefined &&
        auth.token !== undefined &&
        auth.expires > Date.now()
    ) {
        // 我們有個尚未過期的有效權杖
        return
    }
    // ...
}


function aBigFunction() {
    // ...
    // 將 if 陳述式與註解變成函式呼叫式
    if (hasValidToken(auth)) {
        return
    }
    // ...
}

function hasValidToken(auth) {
    if (auth === undefined || auth.token === undefined) {
        return false
    }

    // 將註解變成程式，建立小函式來簡化 if 陳述式
    const hasNotExpiredYet = auth.expires > Date.now()
    return hasNotExpiredYet
}


function aBigFunction() {
    // ...
    // 採取行內重構
    const hasToken = auth === undefined || auth.token === undefined
    const hasValidToken = hasToken && auth.expires > Date.now()
    if (hasValidToken) {
        return
    }
    // ...
}
