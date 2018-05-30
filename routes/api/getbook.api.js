const mongoose = require('mongoose')
bookList = mongoose.model('higashinokeigo'),
  URL = require('url');
class BookList {
  // 获取书籍列表
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
  // 获取书籍基本信息
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
        title: v.title,
        chapterid: v.chapterid
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
  // 根据章节获取内容
  static async getChaptertext(ctx) {
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
    console.log(result)
    // 每个章节为number
  }
}

module.exports = BookList;