const { Server } = require('anchor-express');

const server = new Server(3000)
const instance = server.getInstance()