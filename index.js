const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const { wordsRouter } = require('./api/v1/index');
require('dotenv').config();
require('./db/index');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// root (/)
app.get('/', (req, res) => {
	res.send('Hello Word');
});

// words (/words)
app.use('/words', wordsRouter);

app.listen(PORT, () => {
	console.log(`✅ Server is listening on http://localhost:${PORT}`);
});
