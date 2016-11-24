export default class extends koahub.http {

    constructor(ctx, next) {
        super(ctx, next);
        console.log('base http')
    }

    isLogin() {
        console.log('base isLogin');
    }
}
