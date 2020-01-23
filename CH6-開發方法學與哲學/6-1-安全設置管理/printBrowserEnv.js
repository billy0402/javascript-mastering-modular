import env from './env.js'

const browserEnv = env('BROWSER_ENV')
const prettyJson = JSON.stringify(browserEnv, null, 2)
console.log(prettyJson)
// node printBrowserEnv.js > browser/.env.browser.json
