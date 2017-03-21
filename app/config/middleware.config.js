module.exports = {

    session: {
        key: 'koahub.js'
    },

    static: {
        dir: 'www'
    },

    hbs: {
        extname: '.html',
        viewPath: './www',
        layoutsPath: './www',
        partialsPath: './www',
        disableCache: true //true: 模版修改立即生效（性能差），false：模版修改重启生效（性能提升10倍）
    },

    mysql: {
        'host': '127.0.0.1',
        'user': 'root',
        'password': '',
        'database': 'koahub',
        'charset': 'utf8'
    }
}
