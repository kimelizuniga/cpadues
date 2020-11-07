const mongoose = require('mongoose');

const classSixSchema = new mongoose.Schema({
    task: String,
    date: { type: Date },
    submit: String
})

module.exports = mongoose.model('TaskSix', classSixSchema);