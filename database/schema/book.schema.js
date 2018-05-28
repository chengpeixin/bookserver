const mongoose = require('mongoose')
autoinc = require('mongoose-plugin-autoinc'),
  autoIncrement = autoinc.autoIncrement,
  Schema = mongoose.Schema;
var BookSchema = new Schema({
  imgSrc: String,
  bookName: String,
  summery: String,
  author: String,
  text: Array
});
BookSchema.plugin(autoIncrement, {
  model: 'higashinokeigo',
  field: 'id',
  startAt: 10,
  incrementBy: 1
});
BookSchema.pre('save', function (next) {
  next()
})

const bookModel = mongoose.model('higashinokeigo', BookSchema)
