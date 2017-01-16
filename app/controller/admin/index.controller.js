import base from "./base.controller";

export default class extends base {

    async _initialize() {
        await super._initialize();
    }

    async index() {
        this.view(1);
    }

    async index2() {
        this.json(1, 2);
    }
}
