import express from 'express';

const PORT = 5000;
const app = express();

// Парсим данные в json
app.use(express.json()); // <---

app.post('/', (req, res) => {
	let body = req.body; // <---
	res.json(body);
});

app.listen(PORT, () => { console.log(`Server started at ${PORT} port`)});