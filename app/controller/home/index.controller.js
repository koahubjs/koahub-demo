module.exports = class extends koahub.controller {

    async _initialize() {
        //设置模版主题
        this.state.theme = 'home';
    }

    async index() {
    	
        const context = {version: process.version, time: new Date(), num: this.add(1, 2)};
        await this.render('index', context);
    }
}
