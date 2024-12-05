const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class CourseController {

    // GET /courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                if (!course) {
                    return res.status(404).json({ message: 'Course not found' });
                }
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next); 
    }

    // GET /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // POST /courses/store
    store(req, res, next) {
        const formData = req.body;
        if (formData.videoId) {
            formData.image = `https://img.youtube.com/vi/${formData.videoId}/0.jpg`;
        } else {
            formData.image = 'https://img.youtube.com/default-image.jpg';
        }
    
        const course = new Course(formData);
        course.save()
            .then(() => {
                res.redirect('/');
            })
            .catch(next);
    }
    
    
}

module.exports = new CourseController();
