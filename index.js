const koa = require('koa');
const app = new koa();
const cors = require('koa2-cors')
const router = require('koa-router')
const koaBody = require('koa-body')
const mongoose = require('mongoose')

require('./database/init').connect()
require('./database/init').initSchema()
const routes = require('./routes/route')
const port = 8082;

app
  .use(cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  }))
  .use(koaBody({}))
  .use(routes.routes());
app.listen(port);
