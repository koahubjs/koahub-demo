import bookshelf from "./../data/mysql.init";

var model = bookshelf.Model.extend({
    tableName: 'artical',
    hasTimestamps: true
});

export default model;
