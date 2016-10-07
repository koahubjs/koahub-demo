import Koahub from "koahubjs";

const app = new Koahub();
app.run(3000);

console.log(koahub.hook.add('hook1', '/admin/order/index'));
console.log(koahub.hook.add('hook1', '/admin/order/index2'));

console.log(koahub.hook.add('hook2', 'tools.add(1,2)'));
console.log(koahub.hook.add('hook2', 'tools.dis(2,1)'));
