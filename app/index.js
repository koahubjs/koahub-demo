import Koahub from "koahubjs";
import hbs from "koahub-handlebars";
import convert from "koa-convert";
import body from "koa-better-body";
import serve from "koa-static";
import session from "koa-session2";
import helpers from "handlebars-helpers";

const app = new Koahub();
const koa = app.getKoa();

koa.use(convert(body()));
koa.use(convert(serve('./www')));
koa.use(session({
    key: "koahubjs",   //default "koa:sess"
}));
koa.use(hbs.middleware({
    extname: '.html',
    viewPath: './www',
    layoutsPath: './www',
    partialsPath: './www',
    disableCache: true //true: 模版修改立即生效（性能差），false：模版修改重启生效（性能提升10倍）
}));

helpers({
    handlebars: hbs.handlebars
});

// 支持全局快捷方法
koa.use(async function(ctx, next){
    if(!global.model && koahub.utils.model){
        global.model = koahub.utils.model;
    }
    await next();
});

app.run();