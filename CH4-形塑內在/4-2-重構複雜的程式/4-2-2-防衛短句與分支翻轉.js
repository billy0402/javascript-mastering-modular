// 條件陳述式裡面有長分支
// 一長串的成功案例分支，佔了大量的程式，在結尾有一些 else 分支
// 用來記錄 error. throw. return 或其他錯誤處理
function conditions() {
    if (response) {
        if (!response.error) {
            // 使用 response...
        } else {
            return false
        }
    } else {
        return false
    }
}


// 早期退出法 (early exit approach)
// 把所有錯誤處理移到上面
// 可以減少嵌套及 else 分支，並快速可能出現的失敗案例
function conditions() {
    if (!response) {
        return false
    }

    if (response.error) {
        return false
    }

    // 使用 response...
}
