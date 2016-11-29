export default {
    port: 3000,
    default_module: 'home',

    //自动加载配置 such as koahub.utils
	loader: {
	    "utils": [{
	        root: 'runtime/util',
	        suffix: '.util.js'
	    }, {
	        root: 'runtime/addon',
	        suffix: '.util.js',
	        prefix: '/',
	        filter: [/\w*\/util\//]
	    }]
	}
}