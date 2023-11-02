const mongoose = require('mongoose')
const Schema = mongoose.Schema
const commentSchema = new Schema({
    text: {
        type: String,
        require: true
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

module.exports = mongoose.model('comments', commentSchema)