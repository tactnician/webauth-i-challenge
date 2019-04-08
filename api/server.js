const express = require('express');

server = express();
const helmet = require('helmet');

const router = require('../router/router');

server.use(express.json())
server.use(helmet());


server.get('/', (req, res) => {
    res.send(`
        <h1> Hi Mom, </h1>
        <p> This server is running on my Laptop </p>
    `)
})

server.use('/api', router);

module.exports = server; 