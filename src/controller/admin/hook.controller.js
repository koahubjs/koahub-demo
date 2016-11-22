export default class extends koahub.http {

    constructor(ctx, next) {
        super(ctx,  next);
    }

    index() {
        console.log('hook');
        koahub.hook.run('hook1');
        koahub.hook.run('hook2');
    }
}
