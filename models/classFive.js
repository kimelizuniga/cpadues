const mongoose = require('mongoose');

const classFiveSchema = new mongoose.Schema({
    task: String,
    date: { type: Date },
    submit: String
})

module.exports = mongoose.model('TaskFive', classFiveSchema);