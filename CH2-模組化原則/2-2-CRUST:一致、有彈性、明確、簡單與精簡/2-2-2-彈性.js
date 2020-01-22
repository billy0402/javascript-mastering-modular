/*
jQuery $ 函式多載清單:
$()
$(selector)
$(selector, context)
$(element)
$(elementArray)
$(object)
$(selection)
$(html): 多載可用收到的 html 建立元素
$(html, ownerDocument)
$(html, attributes)
$(callback): 可以指定一個在 DOM 完成載入時執行的函式
所有其他的多載負責匹配 DOM 裡面的元素與收到的輸入
 */


// 無效輸入拋錯
$('{div}')
// <- Uncaught Error: unrecognized expression: {div}


// 選用參數
await fetch('/api/users')
await fetch('api/users/rob', {
    method: 'DELETE'
})


// Keyboard#initEvent 避免破壞回溯性相容性，不斷增長 API
event.initKeyEvent(type, bubbles, cancelable, viewArg,
    ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg,
    keyCodeArg, charCodeArg)


// 除了重要參數，選用參數全部塞入 options 物件
event.initKeyEvent(type, {
    bubbles, cancelable, viewArg,
    ctrlKeyArg, altKeyArg, shiftKeyArg, metaKeyArg,
    keyCodeArg, charCodeArg
})


// 沒有使用 options，為了改變後面參數值，前面參數也必須傳入預設值
function createButton(size = 'normal', type = 'primary', color = red) {
    // ...
}

createButton('normal', 'primary', 'blue')


/*
優點:
- 使用者可以用任何順序宣告選項，因為 options 物件裡面，引數的位置並不重要。
- API 可為各個選項提供預設值，避免讓使用者只為了改變其他位置的參數而指定預設值。
- 使用者不需要關心他們不需要的選項。
- 開發人員只要閱讀使用這個 API 的程式就可以立刻瞭解各個參數的用途，
  因為它們在 options 物件裡面有明確的名稱。
 */
