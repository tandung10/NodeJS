const Course = require('../models/Course')
const { mongooseToObject } = require('../../util/mongoose')

class CourseController {


    // GET /courses/:slug
    async show(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug });
            if (course) {
                // res.json(course);
                res.render('courses/show', { course: mongooseToObject(course) });
            } else {
                res.status(404).json({ error: 'Course not found' });
            }
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new CourseController;