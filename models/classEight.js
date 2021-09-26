const mongoose = require('mongoose');

const classEightSchema = new mongoose.Schema({
    task: String,
    date: { type: Date },
    submit: String
})

module.exports = mongoose.model('TaskEight', classEightSchema);