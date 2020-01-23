// https://github.com/indexzero/nconf
import nconf from 'nconf'

nconf.env()
nconf.file('environment', `.env.${nodeEnv()}.json`) // 公開環境變數
nconf.file('machine', '.env.json') // 私有環境變數
nconf.file('default', '.env.defaults.json') // 本地私有環境變數

process.env.NODE_ENV = nodeEnv() // 一致性

function nodeEnv() {
    return accessor('NODE_ENV')
}

function accessor(key) {
    return nconf.get(key)
}

export default accessor
