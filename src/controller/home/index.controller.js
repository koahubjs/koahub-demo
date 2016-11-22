export default class extends koahub.http {

    constructor(ctx, next) {
        super(ctx, next);

        //设置模版主题
        super.state('theme', 'home');
    }

    async index() {
        const context = {version: process.version, time: new Date()};
        await super.render('index', context);
    }
}
