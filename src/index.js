import Koahub from "koahubjs";
import hbs from "koahub-handlebars";
import convert from "koa-convert";
import body from "koa-better-body";
import serve from "koa-static";
import helpers from "handlebars-helpers";

const app = new Koahub();
const koa = app.getKoa();

koa.use(convert(body()));
koa.use(convert(serve('./www')));
koa.use(hbs.middleware({
    extname: '.html',
    viewPath: './www',
    layoutsPath: './www',
    partialsPath: './www'
}));

helpers({
    handlebars: hbs.handlebars
});

app.run();