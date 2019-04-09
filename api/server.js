const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
// const restricted = require('../middleware/restricted');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const dbConfig = require('../data/dbConfig');

const router = require('../router/router');

const server = express();

sessionConfig = {
    name: 'cookieID',
    secret: process.env.SECRET || "monkey-pants",
    cookie: {
        maxAge: 1000*60*60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStore({
        knex: dbConfig,
        tablename: 'sessions',
        sidfieldname: 'sid',
        createtable: true,
      clearInterval: 1000 * 60 *10
    })
}

server.use(express.json())
server.use(helmet());
server.use(session(sessionConfig));
// server.use(cors('headers'));
// server.use(restricted());

server.use('/api', router);

server.get('/', (req, res) => {
    res.send(`
        <h1> Portal </h1>
    `)
})



module.exports = server; 