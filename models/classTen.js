const mongoose = require('mongoose');

const classTenSchema = new mongoose.Schema({
    task: String,
    date: { type: Date },
    submit: String
})

module.exports = mongoose.model('TaskTen', classTenSchema);