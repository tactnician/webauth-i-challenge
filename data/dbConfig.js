require('dotenv').config();
const knex = require('knex');

const dbEngine = process.env.DB || 'development';
const config = require('../knexfile.js')[dbEngine];

module.exports = config;