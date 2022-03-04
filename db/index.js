const mongoose = require('mongoose');
const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_URL, DATABASE_NAME } =
	process.env;

main().catch((err) => console.log(err));

async function main() {
	console.log(DATABASE_USER);
	// await mongoose.connect('mongodb://localhost:27017/hello-word-db');
	await mongoose.connect(
		`mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_URL}/${DATABASE_NAME}?retryWrites=true&w=majority`
	);
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function () {
	console.log('✅ MongoDB is connected');
});
