const mongoose = require('mongoose');

const classFourSchema = new mongoose.Schema({
    task: String,
    date: { type: Date }
})

module.exports = mongoose.model('TaskFour', classFourSchema);