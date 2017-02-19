import bookshelf from "./../data/bookshelf.init";

const model = bookshelf.Model.extend({
    tableName: 'article',
    hasTimestamps: true
});

export default model;
