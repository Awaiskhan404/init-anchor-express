const greet_get_worker = (request = {}) => {
    return {
        greeting: 'Hello World! You good to start working with anchor express now. Happy Hacking!'
    }
}

module.exports = {
    greet_get_worker
}