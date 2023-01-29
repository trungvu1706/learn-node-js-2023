const Course = require('../models/Course')

class CoursesControllers {
  show(req, res, next) {
    console.log('this is req', req.params)

    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        console.log('course', course)
      })
      .catch(next)
    res.send('Course detail')
  }
  create(req, res, next) {
    res.send('Course created!')
  }
  store(req, res, next) {
    console.log('new form', req.body)
    const course = new Course(req.body)
    course.save()
    res.send('created successfully')
  }
}

module.exports = new CoursesControllers()
