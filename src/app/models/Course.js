const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
var mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Course = new Schema(
  {
    id: ObjectId,
    name: { type: String, default: 'node js course' },
    description: {
      type: String,
      default: 'node js for BE',
      minLength: 10,
      maxLength: 200,
    },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  }
)
mongoose.plugin(slug)
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true })

module.exports = mongoose.model('Course', Course)
