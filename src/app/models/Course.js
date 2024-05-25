
const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater')
mongoose.plugin(slug);
const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, default: 'hahaha', required: true },
    description: { type: String, default: 'hahaha' },
    image: { type: String, default: 'hahaha' },
    videoId: { type: String, default: 'hahaha' },
    level: { type: String, default: 'hahaha' },
    slug: { type: String, slug: 'name', unique: true },
});

module.exports = mongoose.model('Course', Course);