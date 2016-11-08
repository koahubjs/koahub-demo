import Koahub from "koahubjs";
import hbs from "koa-hbs";
import convert from "koa-convert";
import co from "co";
import body from "koa-better-body";
import serve from "koa-static";

const app = new Koahub();
const koa = app.getKoa();

koa.use(convert(body()));
koa.use(convert(serve('./www')));

koa.use(convert(hbs.middleware({
    extname: '.html',
    viewPath: './www'
})));

koa.use(async(ctx, next) => {
    const render = ctx.render;
    ctx.render = async function _convertedRender() {
        return co.call(ctx, render.apply(ctx, arguments))
    }
    await next();
});

app.run();