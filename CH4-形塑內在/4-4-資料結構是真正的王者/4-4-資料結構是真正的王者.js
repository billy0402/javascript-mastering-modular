// 資料結構的決定了如何存取這些結構，可能會造就或破壞一個應用程式
const json = [
    {
        slug: 'understanding-javascript-async-await',
        title: 'Understanding JavaScript’s async await',
        contents: '...'
    },
    {
        slug: 'pattern-matching-in-ecmascript',
        title: 'Pattern Matching in ECMAScript',
        contents: '...'
    }
]


const object = {
    'understanding-javascript-async-await': {
        slug: 'understanding-javascript-async-await',
        title: 'Understanding JavaScript’s async await',
        contents: '...'
    },
    'pattern-matching-in-ecmascript': {
        slug: 'pattern-matching-in-ecmascript',
        title: 'Pattern Matching in ECMAScript',
        contents: '...'
    }
}


const map = new Map([
    ['understanding-javascript-async-await', {
        slug: 'understanding-javascript-async-await',
        title: 'Understanding JavaScript’s async await',
        contents: '...'
    }],
    ['pattern-matching-in-ecmascript', {
        slug: 'pattern-matching-in-ecmascript',
        title: 'Pattern Matching in ECMAScript',
        contents: '...'
    }],
])
