const mongoose = require('mongoose');

const classSevenSchema = new mongoose.Schema({
    task: String,
    date: { type: Date },
    submit: String
})

module.exports = mongoose.model('TaskSeven', classSevenSchema);