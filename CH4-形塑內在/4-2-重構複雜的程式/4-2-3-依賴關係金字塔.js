// 函式表達式在賦值的那行程式碼執行之前都不會綁定變數
double(6) // TypeError: double is not a function
var double = function (x) {
    return x * 2
}


// let 或 const 綁定，在到達變數宣告陳述式之前，參考綁定時，TDZ 語義會產生錯誤
double(6) // ReferenceError: Cannot access 'double' before initialization
const double = function (x) {
    return x * 2
}


// 函式宣告式被懸吊再翻為的最上面，可以在程式的任何地方參考它們
double(6) // <- 12
function double(x) {
    return x * 2
}
