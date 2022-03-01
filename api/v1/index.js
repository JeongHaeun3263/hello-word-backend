const express = require('express');
const wordsRouter = express.Router();
const Word = require('../../db/models/word.model');

/* 
Get All Words List
*/
wordsRouter.get('/', (req, res) => {
	Word.find({}, (err, words) => {
		if (err) return console.error(err);
		res.json({
			words,
		});
	});
});

/* 
Add a new word
*/
wordsRouter.post('/', (req, res) => {
	const newWord = new Word(req.body);
	newWord.save().then((savedWord) => {
		res.json({
			reply: savedWord,
			success: true,
		});
	});
});

/* 
Get a word by id
*/
wordsRouter.get('/:id', (req, res) => {
	res.json({
		reply: 'get word by id success',
	});
});

/* 
Delete a word by id
*/
wordsRouter.delete('/:id', (req, res) => {
	res.json({
		reply: 'delete word by id success',
	});
});

module.exports = {
	wordsRouter,
};
