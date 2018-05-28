const mongoose = require('mongoose')
bookList = mongoose.model('higashinokeigo'),
  URL = require('url');
class BookList {
  static async getBookList(ctx) {
    const result = await bookList.find(),
      data = [];
    result.forEach((v, i) => {
      data.push({
        img: v.imgSrc,
        bookName: v.bookName,
        summery: v.summery,
        author: v.author,
        id: v.id
      })
    })
    ctx.body = {
      data
    }
  }
  static async getBook(ctx) {
    const params = ctx.request.body;
    if (!params.id) {
      ctx.body = {
        data: ['无数据']
      }
      return;
    }
    const result = await bookList.findOne({
      id: params.id
    })
    let ary = []
    result.text.forEach((v, i) => {
      ary.push({
        title: v.title
      })
    })
    const reqdata = {
      img: result.imgSrc,
      bookName: result.bookName,
      summery: result.summery,
      author: result.author,
      chapter: ary
    }
    ctx.body = {
      data: reqdata
    }
  }
}

module.exports = BookList;