export default {
    port: 3000,
    default_module: 'home',

	//自动加载配置
    loader: {
        "models": [{
            root: 'model',
            suffix: '.model.js'
        }, {
            root: 'addon',
            suffix: '.model.js',
            filter: [/\/model/]
        }]
    }
}