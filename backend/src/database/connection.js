const knex = require('knex');
const configuration = require('../../knexfile');

// variável ambiente da perte de teste lá do package.json
const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(config);

module.exports = connection;