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

    // GET /courses/create
    async create(req, res, next) {
        res.render('courses/create');
    }

    // POST /courses/store
    async store(req, res, next) {
        try {
            const course = new Course(req.body);
            await course.save()
            res.redirect('/');

        } catch (error) {
            next(error);
        }
    }
    // GET /courses/:id/edit
    async edit(req, res, next) {
        try {
            const course = await Course.findById(req.params.id);
            if (course) {
                res.render('courses/edit', { course: mongooseToObject(course) });
            } else {
                res.status(404).json({ error: 'Course not found' });
            }
        } catch (error) {
            next(error);
        }
    }

    // PUT /courses/:id
    async update(req, res, next) {
        try {
            // res.json(req.body);
            const course = await Course.updateOne({ _id: req.params.id }, req.body);
            res.redirect('/me/stored/courses');
        }
        catch (error) {
            next(error);
        }
    }

    // DELETE /courses/:id
    async delete(req, res, next) {
        try {
            await Course.deleteOne({ _id: req.params.id });
            res.redirect('back');
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CourseController;