const mongoose = require('mongoose')
const Schema = mongoose.Schema
const favoriteSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = mongoose.model('favorites', favoriteSchema)