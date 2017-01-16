import Knex from "knex";
import Bookshelf from "bookshelf";
import db from "./../config/db.config";

const knex = new Knex({
    client: 'mysql',
    connection: db
});

const bookshelf = new Bookshelf(knex);
bookshelf.plugin('pagination');

bookshelf.Model = bookshelf.Model.extend({
    hasTimestamps: true
}, {
    handle: function (data) {
        if (typeof data === 'object' && data != null) {
            return data.toJSON();
        }
        return data;
    },
    add: async function (data) {
        if (!data.id) {
            delete data.id;
        }
        data = await this.forge(data).save();
        return this.handle(data);
    },
    del: async function (condition) {
        const data = await this.forge(condition).destroy();
        return this.handle(data);
    },
    get: async function (condition) {
        const data = await this.query({where: condition}).fetch(options);
        return this.handle(data);
    },
    getList: async function (condition) {
        const data = await this.query({where: condition}).fetchAll(options);
        return this.handle(data);
    },
    getCount: async function (condition) {
        const data = await this.query({where: condition}).count();
        return this.handle(data);
    },
    getPageList: async function (page, callback, option) {
    	let pageNum = 25;
        if (option != undefined && option.pageNum != undefined) {
            pageNum = option.pageNum;
        }

        const data = await this.query(function (qb) {
            if (typeof callback === 'function') {
                callback(qb);
            }

            qb.orderBy('id', 'desc');
        }).fetchPage({
            pageSize: pageNum,
            page: page,
            withRelated: options.withRelated
        });

        return {
            data: this.handle(data),
            pagination: data.pagination
        };
    },
    getQueryList: async function (callback) {
        const data = await this.query(function (qb) {
            if (typeof callback === 'function') {
                callback(qb);
            }

            qb.orderBy('id', 'desc');
        }).fetchAll(options);

        return this.handle(data);
    },
    getQueryCount: async function (callback) {
        const data = await this.query(function (qb) {
            if (typeof callback === 'function') {
                callback(qb);
            }
        }).count();

        return this.handle(data);
    }
})

export default bookshelf;
