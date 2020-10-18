const mongoose = require('mongoose');

const classThreeSchema = new mongoose.Schema({
    task: String,
    date: { type: Date }
})

module.exports = mongoose.model('TaskThree', classThreeSchema);