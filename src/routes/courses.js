const express = require('express')
const router = express.Router()

const coursesControllers = require('../app/controllers/CoursesControllers')

router.get('/create', coursesControllers.create)
router.post('/store', coursesControllers.store)
router.get('/:id/edit', coursesControllers.edit)
router.put('/:id', coursesControllers.update)
router.delete('/:id', coursesControllers.destroy)
router.delete('/:id/force', coursesControllers.forceDestroy)
router.patch('/:id/restore', coursesControllers.restore)
router.get('/:slug', coursesControllers.show)

module.exports = router
