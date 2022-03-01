const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
	title: String,
	form: String,
	meaning: String,
});

module.exports = mongoose.model('Word', wordSchema);
