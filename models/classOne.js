const mongoose = require('mongoose');

const classOneSchema = new mongoose.Schema({
    task: String,
    date: { type: Date },
    submit: String
})

module.exports = mongoose.model('TaskOne', classOneSchema);