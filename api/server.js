const express = require('express');

server = express();
const helmet = require('helmet');

const router = require('../router/router');

server.use(express.json())
server.use(helmet());


server.get('/', (req, res) => {
    res.send(`
        <h1> Portal </h1>
    `)
})


module.exports = server; 