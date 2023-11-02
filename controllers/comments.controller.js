const Comment = require('../models/Comment.model')
const Post = require("../models/Post.model");


module.exports.commentsController = {
    getComments: (req, res) => {
        Comment.find(req.query.post ? { post: req.query.post } : {'': ''}).populate('post')
            .then(data => res.json(data))
            .catch(() => res.json({"error": "Не удалось получить записи"}))
    },
    postComment: (req, res) => {
        Comment.create({
            text: req.body.text,
            post: req.body.post,
            user: req.body.user,
        }).then(() => res.json('Record created'))
            .catch(() => res.json({ "error": "Ошибка при добавлении записи" }))
    },
    deleteComment: (req, res) => {
        Comment.findByIdAndDelete(req.params.id).then(() => {
            res.json(`Record has been deleted`)
        }).catch(() => res.json({ "error": "Ошибка при удалении записи" }))
    },
    patchComment: (req, res) => {
        Post.findByIdAndUpdate(req.params.id, {
            text: req.body.text,
            post: req.body.post,
            user: req.body.user,
        }).then(() => res.json(`Record has been changed`))
            .catch(() => res.json({ "error": "Ошибка при изменении записи" }))
    }
}