import bookshelf from "./../data/bookshelf.init";

const model = bookshelf.Model.extend({
    tableName: 'artical',
    hasTimestamps: true
});

export default model;
