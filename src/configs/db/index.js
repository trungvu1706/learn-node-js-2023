const mongoose = require('mongoose')

async function connect() {
  try {
    mongoose.set('strictQuery', false)
    await mongoose.connect(
      'mongodb://127.0.0.1:27017/full_stack_education_dev',
      {
        useNewUrlParser: true,
      }
    )
    console.log('connect successful!')
  } catch (error) {
    console.log('connect failed!', error)
  }
}

module.exports = { connect }
