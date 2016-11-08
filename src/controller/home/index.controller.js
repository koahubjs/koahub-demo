export default class extends koahub.http {

    constructor() {
        super();
    }

    async index() {
        const context = {version: process.version, time: new Date()};
        await ctx.render('index', context);
    }
}
