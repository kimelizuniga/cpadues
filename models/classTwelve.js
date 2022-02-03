const mongoose = require('mongoose');

const classTwelveSchema = new mongoose.Schema({
    task: String,
    date: { type: Date },
    submit: String
})

module.exports = mongoose.model('TaskTwelve', classTwelveSchema);