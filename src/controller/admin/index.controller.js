import base from "./base.controller";

export default class extends base {

    constructor() { //构造函数
        super();
    }

    index() {
        super.isLogin();
        console.log('hello koahubjs');
    }

    index2() {
        super.isLogin();
        console.log('hello koahubjs2');
    }
}
