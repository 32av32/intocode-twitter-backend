const mongoose = require('mongoose')
const Schema = mongoose.Schema
const postSchema = new Schema({
    text: {
        type: String,
        require: true
    },
    likes: {
        type: Number,
        default: 0,
        immutable: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = mongoose.model('posts', postSchema)