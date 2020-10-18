const mongoose = require('mongoose');

const classFiveSchema = new mongoose.Schema({
    task: String,
    date: { type: Date }
})

module.exports = mongoose.model('TaskFive', classFiveSchema);