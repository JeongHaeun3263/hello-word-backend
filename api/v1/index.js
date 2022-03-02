const express = require('express');
const wordsRouter = express.Router();
const WordModel = require('../../db/models/word.model');

/* 
Get All Words List
*/
wordsRouter.get('/', (req, res) => {
	WordModel.find({}, (err, words) => {
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
	const newWord = new WordModel(req.body);
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
	const wordId = req.params.id;
	WordModel.findById(wordId, (err, word) => {
		if (err) {
			return console.log(err);
		}
		// // To do : check later
		// if (!word) {
		// 	return res.status(404).json({
		// 		message: 'word not found',
		// 	});
		// }
		res.json({
			success: true,
			word,
		});
	});
});

/* 
Delete a word by id
*/
wordsRouter.delete('/:id', (req, res) => {
	const wordId = req.params.id;
	WordModel.findByIdAndRemove(wordId, (err, deletedWord) => {
		if (err) {
			return console.log(err);
		}
		if (!deletedWord) {
			return res.status(404).json({
				message: 'word can not be deleted',
			});
		}
		res.json({
			reply: 'deleted word by id success',
		});
	});
});

/* 
Update a word by id
*/
wordsRouter.put('/:id', (req, res) => {
	const wordId = req.params.id;
	const updatedBody = req.body;
	WordModel.findByIdAndUpdate(
		wordId,
		updatedBody,
		{ new: true },
		(err, updatedWord) => {
			if (err) {
				return console.log(err);
			}
			// if (!updatedWord) {
			// 	return res.status(404).json({
			// 		message: 'word cannot be updated',
			// 	});
			// }
			res.json({
				reply: 'updated word by id success',
				word: updatedWord,
			});
		}
	);
});

module.exports = {
	wordsRouter,
};
