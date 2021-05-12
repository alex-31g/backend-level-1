import express from 'express';
import mongoose from 'mongoose';

const PORT = 5000;

// URL подключения к БД, полученный при создании облачной БД
const DB_URL = `mongodb+srv://alex:1111@cluster0.3jnoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`; 

const app = express();

app.use(express.json()); 

app.get('/', (req, res) => {
	res.status(200).json('Server works');
});

async function startApp() {
	try {
		// Подключение к БД
		await mongoose.connect(DB_URL, { 
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		app.listen(PORT, () => { console.log(`Server started at ${PORT} port`)});
	} catch(e) {
		console.log(e);
	}
}

startApp();