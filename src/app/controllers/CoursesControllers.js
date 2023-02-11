const Course = require('../models/Course')

class CoursesControllers {
  constructor() {}
  async show(req, res, next) {
    console.log('this is req', req.params)

    const data = await Course.findOne({ slug: req.params.slug })

    return res.status(200).json(data)
  }
  create(req, res, next) {
    res.send('Course created!')
  }
  store(req, res, next) {
    const course = new Course(req.body)
    course.save()
    res.send('created successfully')
  }
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) => {
        console.log('course by id', course)
      })
      .catch(next)
  }
  async update(req, res, next) {
    await Course.updateOne({ _id: req.params.id }, req.body)
    const data = await Course.findOne({ _id: req.params.id })
    return res.status(201).json(data)
  }

  async destroy(req, res, next) {
    await Course.delete({ _id: req.params.id })
    return res.status(200).json('Delete successfully!')
  }

  async restore(req, res, next) {
    await Course.restore({ _id: req.params.id })
    return res.status(200).json('Restore successfully!')
  }
  async forceDestroy(req, res, next) {
    await Course.deleteOne({ _id: req.params.id })
    return res.status(200).json('Force delete successfully!')
  }
}

module.exports = new CoursesControllers()
