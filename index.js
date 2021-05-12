import express from 'express';

// ---------------------------
// Чтобы использовать __dirname в ES6 нужно выполнить следующее:
import path from 'path';
const __dirname = path.resolve();
// ---------------------------

const PORT = 5000;
const app = express();

// Парсим данные формы
app.use(express.urlencoded()); 

app.get('/register', (req, res) => {
	res.sendFile(__dirname + '/register.html');
});

app.post('/register', (req, res) => {
	if (!req.body) {
		return res.sendStatus(400);
	}
	console.log(req.body);
	res.send(`${req.body.userName} - ${req.body.userAge}`);
});

app.listen(PORT, () => { console.log(`Server started at ${PORT} port`)});