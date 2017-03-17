const Knex = require("knex");
const Bookshelf = require("bookshelf");
const db = require("./../config/db.config");

const knex = new Knex({
    client: 'mysql',
    connection: db
});

const bookshelf = new Bookshelf(knex);
bookshelf.plugin('pagination');

module.exports = bookshelf;
