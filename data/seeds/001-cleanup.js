
const cleaner = require('knex-cleaner')

exports.seed = function(knex) {
  return cleaner.clean(knex) // cleans all tables and resets primary keys
};