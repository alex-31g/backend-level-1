import express from 'express';
import mongoose from 'mongoose';
import Post from './Post.js'; // модель данных Post

const PORT = 5000;

// URL подключения к БД, полученный при создании облачной БД
const DB_URL = `mongodb+srv://alex:1111@cluster0.3jnoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
  try {
    // С помощью деструктиризации из req.body получаем необходимые поля
    const { author, title, content, picture } = req.body;

    // Сохранить в БД:
    // - у модели вызываем метод create, которому передаем объект,
    // соответствующий схеме Post
    const post = await Post.create({ author, title, content, picture });

    // Если данные успешно сохранены в БД -
    // обратно на клиент возвратим пост с id, полученный из БД
    res.json(post);
  } catch (e) {
    res.status(500).json(e);
  }
});

async function startApp() {
  try {
    // Подключение к БД
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`Server started at ${PORT} port`);
    });
  } catch (e) {
    console.log(e);
  }
}

startApp();
