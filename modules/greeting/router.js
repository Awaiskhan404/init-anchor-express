const route = [
    {
        route: '/',
        method: 'get',
        controller: require('./greeting.controller').greet_get_worker
    }
]

module.exports = route