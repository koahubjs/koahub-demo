export default class extends koahub.controller {

    _initialize() {
        //设置模版主题
        this.state.theme = 'home';
    }

    async index() {
    	
        const context = {version: process.version, time: new Date()};
        await this.render('index', context);
    }
}
