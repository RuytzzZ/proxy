const Koa = require("koa");
const http = require("./util");
const cors = require("@koa/cors");
const app = new Koa();
app.use(cors());
app.use(async ctx => {
  // console.log(ctx.request.path);

  let a = await http(ctx.request.url);
  console.log(a[0]);

  ctx.body = a[1];
 });

console.log("http://127.0.0.1:3000");

app.listen(3000);
