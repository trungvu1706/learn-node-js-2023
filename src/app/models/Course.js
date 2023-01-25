const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ObjectId = Schema.ObjectId

const Course = new Schema({
  id: ObjectId,
  name: { type: String, default: 'node js course' },
  description: {
    type: String,
    default: 'node js for BE',
    minLength: 10,
    maxLength: 200,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
  },
})

module.exports = mongoose.model('Course', Course)
