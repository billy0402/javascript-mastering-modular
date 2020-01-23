// 使用加號運算子來串接字串與變數
'Hello ' + name + ', I\'m Nicolás!'

// 樣板字串 (template literal)
`Hello ${name}, I'm Nicolás!`


import insane from 'insane'

// 替 HTML 消毒，移除不安全的標籤.屬性或整個樹狀結構
function sanitize(template, ...expressions) {
    return template.reduce((accumulator, part, i) => {
        return accumulator + insane(expressions[i - 1]) + part
    })
}

const comment = 'exploit time! <iframe src="http://evil.corp"></iframe>'
// 在樣板前面加入自訂函式來轉換樣板的輸入，消毒.格式化或其他方式
const html = sanitize`<div>${comment}</div>`
console.log(html)
// <- '<div>exploit time! </div>'
