const mongoose = require('mongoose');

const classTwoSchema = new mongoose.Schema({
    task: String,
    date: { type: Date }
})

module.exports = mongoose.model('TaskTwo', classTwoSchema);