import insane from 'insane'
import mailApi from 'mail-api'
import {mailApiSecret} from './secrets'

// 消毒 (sanitization)
function sanitize(template, ...expressions) {
    return template.reduce((result, part, i) =>
        result + insane(expressions[i - 1]) + part
    )
}

export default function send(options, done) {
    const {
        to,
        subject,
        model: {title, body, tags}
    } = options
    // 模板化
    const html = sanitize`
    <h1>${title}</h1>
    <div>${body}</div>
    <div>
    ${
        tags
            .map(tag => `<span>${tag}</span>`)
            .join(` `)
    }
    </div>
    `
    // email API 用戶端實體化
    const client = mailApi({mailApiSecret})
    // email 傳送
    client.send({
        from: `hello@mjavascript.com`,
        to,
        subject,
        html
    }, done)
}


// email 元件，只負責設置 API 用戶端，只有一個目的: 寄出 email
import mailApi from 'mail-api'
import {mailApiSecret} from './secrets'

export default function send(options, done) {
    // 接收收件者. 標題. 內文
    const {to, subject, html} = options
    const client = mailApi({mailApiSecret})
    // 傳送 email
    client.send({
        from: `hello@mjavascript.com`,
        to,
        subject,
        html
    }, done)
}


// 同樣的 send API，但以 log 到主控台取代寄出 email 的模組，適合用來除錯
export default function send(options, done) {
    const {to, subject, html} = options
    console.log(`
        Sending email.
        To: ${to}
        Subject: ${subject}
        ${html}
    `)
    done()
}


// 模板元件，只負責以模板和使用者提供的模型產生消毒過的 HTML
import insane from 'insane'

function sanitize(template, ...expressions) {
    return template.reduce((result, part, i) =>
        result + insane(expressions[i - 1]) + part
    )
}

export default function compile(model) {
    const {title, body, tags} = model
    const html = sanitize`
    <h1>${title}</h1>
    <div>${body}</div>
    <div>
    ${
        tags
            .map(tag => `<span>${tag}</span>`)
            .join(` `)
    }
    </div>
    `

    return html
}


// 將 email log 供應器與靜態模板化函式組合
import {send} from './email/log-provider'
import {compile} from './templating/static'

export default function send(options, done) {
    const {to, subject, model} = options
    const html = compile(model)
    send({to, subject, html}, done)
}
