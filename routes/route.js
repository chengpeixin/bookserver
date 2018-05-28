const router = require('koa-router')(),
  bookAPI = require('./api/getbook.api.js');
router
  .all('/api/getBookList', bookAPI.getBookList)
  .all('/api/getBook', bookAPI.getBook);
module.exports = router;