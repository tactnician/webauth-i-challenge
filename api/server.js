const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// const restricted = require('../middleware/restricted');

const router = require('../router/router');

server = express();

server.use(express.json())
server.use(helmet());
server.use(cors('headers'));
// server.use(restricted());

server.get('/', (req, res) => {
    res.send(`
        <h1> Portal </h1>
    `)
})

server.use('/api', router);

module.exports = server; 