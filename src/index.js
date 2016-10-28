import Koahub from "koahubjs";

const app = new Koahub();
app.run();

koahub.hook.add('hook1', '/admin/index/index');
koahub.hook.add('hook1', '/admin/index/index2');

koahub.hook.add('hook2', 'tools.add(1,2)');
koahub.hook.add('hook2', 'tools.dis(2,1)');
