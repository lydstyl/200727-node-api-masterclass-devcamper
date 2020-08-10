const express = require('express')
const { getCourses, getCourse, addCourse } = require('../controllers/courses')

const router = express.Router({ mergeParams: true }) // so router.use('/:bootcampId/courses', courseRouter) in bootcamps route works

router.route('/').get(getCourses).post(addCourse)
router.route('/:id').get(getCourse)

module.exports = router
