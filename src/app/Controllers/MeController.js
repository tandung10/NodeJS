const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class MeController {

    // GET /stored/courses
    async storedCourses(req, res, next) {
        try {
            const courses = await Course.find({})
                .then(courses => {
                    res.render('me/storedCourses', {
                        courses: mutipleMongooseToObject(courses)
                    });
                })
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new MeController;