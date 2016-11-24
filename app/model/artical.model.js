import bookshelf from "./../data/mysql.init";

const model = bookshelf.Model.extend({
    tableName: 'artical',
    hasTimestamps: true
});

export default model;
