const mongoose = require('mongoose');

const classElevenSchema = new mongoose.Schema({
    task: String,
    date: { type: Date },
    submit: String
})

module.exports = mongoose.model('TaskEleven', classElevenSchema);