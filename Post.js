import mongoose from 'mongoose';

// Создаем схему, которая будет описывать модель
// (модель данных - описание полей и их типов):
const Post = new mongoose.Schema({
	author: { type: String, required: true },
	title: { type: String, required: true },
	content: { type: String, required: true },
	picture: { type: String }
})

// 'Post' - имя модели, которая построенна на основании схемы Post
export default mongoose.model('Post', Post);