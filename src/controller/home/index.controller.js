export default class extends koahub.http {

    constructor() {
        super();

        //设置模版主题
        ctx.state.theme = 'home';
    }

    async index() {
        const context = {version: process.version, time: new Date()};
        await ctx.render('index', context);
    }
}
