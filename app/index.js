import Koahub from "koahub";
import hbs from "koahub-handlebars";
import helpers from "handlebars-helpers";
import model from "./util/model.util";

const app = new Koahub();

app.use(hbs.middleware({
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
app.use(async function(ctx, next){
    
    ctx.model = model;

    await next();
});

app.run();