const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.use(express.json())
app.use(require('./routes/users.route'))
app.use(require('./routes/posts.route'))
app.use(require('./routes/comments.route'))
app.use(require('./routes/favorites.route'))

mongoose.connect("mongodb+srv://32av32:AV123580xx@cluster0.7fiabdg.mongodb.net/twitter?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Успешно соединились с сервером MongoDB'))
    .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(4000)