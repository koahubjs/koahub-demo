const bookshelf = require("./../data/bookshelf.init");

const model = bookshelf.Model.extend({
    tableName: 'article',
    hasTimestamps: true
});

module.exports = model;
