import env from '.env.browser.json'

export default function accessor(key) {
    if (typeof key !== 'string') {
        return env
    }

    return key in env ? env[key] : null
}
