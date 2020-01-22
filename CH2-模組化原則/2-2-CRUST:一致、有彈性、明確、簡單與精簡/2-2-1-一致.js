/*
Array API:

(回呼函式(當前元素, 當前索引, 陣列本身), 回呼環境)
(function callback(currentValue, currentIndex, array) {}, thisArg)
#forEach: 不回傳值
#map    : 回傳每次呼叫的結果
#filter : 只回傳讓回呼回傳 true 值的項目
#find   :
#some   : 其中項目讓回呼回傳 true 值，回傳 true，否則回傳 false
#every  : 每個項目讓回呼回傳 true 值，回傳 true，否則回傳 false

(回呼函式(累加器, 當前元素, 當前索引, 陣列本身), 初始值)
(function callback(accumulator, currentValue, currentIndex, array), initialValue)
# reduce
# reduceRight
 */
