const mongoose = require('mongoose');

const classThreeSchema = new mongoose.Schema({
    task: String,
    date: { type: Date },
    submit: String
})

module.exports = mongoose.model('TaskThree', classThreeSchema);