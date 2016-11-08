export default class extends koahub.http {

    constructor() { //构造函数
        super();
    }

    index() {
        console.log('hook');
        koahub.hook.run('hook1');
        koahub.hook.run('hook2');
    }
}
