const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController {

    // GET /
    async index(req, res, next) {
        // Cach 1 : Callback
        // try {
        //     const courses = await Course.find({});
        //     res.json(courses);
        // } catch (err) {
        //     next(err);
        // }

        // Cach 2 : Promise
        try {
            const courses = await Course.find({})
                .then(courses => {
                    res.render('home', {
                        courses: mutipleMongooseToObject(courses)
                    });
                })
        } catch (error) {
            next(error);
        }
    }
    // GET /search
    async show(req, res, next) {
        try {
            const courses = await Course.find({})
                .then(courses => {

                    res.render('search', {
                        courses: mutipleMongooseToObject(courses)
                    });
                })
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new SiteController;