const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Schema = mongoose.Schema

const Course = new Schema({
    name: {type: String, required: true},
    description: {type: String, maxlength: 1000},
    thumbnail: String,
    image: String,
    videoID: String,
    slug: {type: String, slug: "name"}
}, {
    timestamps: true
})

module.exports = mongoose.model('Course', Course)