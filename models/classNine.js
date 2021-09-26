const mongoose = require('mongoose');

const classNineSchema = new mongoose.Schema({
    task: String,
    date: { type: Date },
    submit: String
})

module.exports = mongoose.model('TaskNine', classNineSchema);