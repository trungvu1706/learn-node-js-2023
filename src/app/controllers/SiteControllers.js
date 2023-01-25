const Course = require('../models/Course')

class SiteControllers {
  index(req, res) {
    // res.render('home')

    Course.find({}, (err, course) => {
      if (!err) {
        res.json(course)
      } else {
        res.status(404).json({ err: 'Something wrong!' })
      }
    })
  }

  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteControllers()
