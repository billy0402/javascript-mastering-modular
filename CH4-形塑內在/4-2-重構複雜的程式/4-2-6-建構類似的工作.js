function absolutizeHtml(html, origin) {
    const $dom = $(html)
    $dom.find('a[href]').each(function () {
        const $element = $(this)
        const href = $element.attr('href')
        const absolute = absolutize(href, origin)
        $element.attr('href', absolute)
    })
    $dom.find('img[src]').each(function () {
        const $element = $(this)
        const src = $element.attr('src')
        const absolute = absolutize(src, origin)
        $element.attr('src', absolute)
    })

    return $dom.html()
}


// 將向轉換的所有標籤與屬性放入陣列
const attributes = [
    ['a', 'href'],
    ['img', 'src'],
    ['iframe', 'src'],
    ['script', 'src'],
    ['link', 'href']
]

// 將重複的程式抽象化，以重複用於每種標籤與屬性
function absolutizeHtml(html, origin) {
    const $dom = $(html)
    attributes.forEach(absolutizeAttribute)

    return $dom.html()

    function absolutizeAttribute([tag, property]) {
        $dom.find(`${tag}[${property}]`).each(function () {
            const $element = $(this)
            const value = $element.attr(property)
            const absolute = absolutize(value, origin)
            $element.attr(property, absolute)
        })
    }
}
