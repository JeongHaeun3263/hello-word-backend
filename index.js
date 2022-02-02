const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
	res.send('Hello Word');
});

app.get('/words', (req, res) => {
	const words = [
		{
			name: 'persistence',
			form: 'none',
			meaning:
				'firm or obstinate continuance in a course of action in spite of difficulty or opposition.',
		},
		{
			name: 'achieve',
			form: 'verb',
			meaning:
				'successfully bring about or reach (a desired objective, level, or result) by effort, skill, or courage.',
		},
	];
	res.json({ words });
});

app.listen(PORT, () => {
	console.log(`✅ server is listening on http://localhost:${PORT}`);
});
