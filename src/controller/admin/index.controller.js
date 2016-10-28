import base from "./base.controller";

export default class extends base {

    constructor() { //构造函数
        super();
    }

    index() {
        super.view(1);
    }

    index2() {
        super.json(1, 2);
    }
}
