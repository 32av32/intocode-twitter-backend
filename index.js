const express = require('express')
const mongoose = require('mongoose')
const app = express()


app.use(express.json())
app.use(require('./routes/users.route'))
app.use(require('./routes/posts.route'))
app.use(require('./routes/comments.route'))
app.use(require('./routes/favorites.route'))


async function connectToMongoose(url) {
    try{
        await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
        console.log('Успешно соединились с сервером MongoDB')
    } catch (err) {
        console.log(`Ошибка при соединении с сервером MongoDB. Message: ${err.message}`)
    }

}

connectToMongoose('mongodb+srv://32av32:AV123580xx@cluster0.7fiabdg.mongodb.net/twitter?retryWrites=true&w=majority')
app.listen(4000)