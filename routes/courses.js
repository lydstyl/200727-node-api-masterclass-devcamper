const express = require('express')
const { getCourses } = require('../controllers/courses')

const router = express.Router({ mergeParams: true }) // so router.use('/:bootcampId/courses', courseRouter) in bootcamps route works

router.route('/').get(getCourses)

module.exports = router
