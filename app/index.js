const Koahub = require("koahub");
const model = require("./util/model.util");

const app = new Koahub();

// 支持快捷方法
app.use(async function(ctx, next){
    
    ctx.model = model;
    
    await next();
});

app.run();