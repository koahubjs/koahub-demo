import base from "./base.controller";

export default class extends base {

    constructor(ctx, next) {
        super(ctx, next);
    }

    index() {
        super.view(1);
    }

    index2() {
        super.json(1, 2);
    }
}
