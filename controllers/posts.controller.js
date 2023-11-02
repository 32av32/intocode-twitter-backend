const Post = require('../models/Post.model')


module.exports.postsController = {
    getPost: (req, res) => {
        Post.findById(req.params.id).then(data => res.json(data))
            .catch(() => res.json({"error": "Не удалось получить запись"}))
    },
    getPosts: (req, res) => {
        Post.find(req.query.user ? { user: req.query.user } : null).populate('user')
            .then(data => res.json(data))
            .catch(() => res.json({"error": "Не удалось получить записи"}))
    },
    postPost: (req, res) => {
        Post.create({
            text: req.body.text,
            user: req.body.user,
        }).then(() => res.json('Record created'))
            .catch(() => res.json({ "error": "Ошибка при добавлении записи" }))
    },
    deletePost: (req, res) => {
        Post.findByIdAndDelete(req.params.id).then(() => res.json(`Record has been deleted`))
            .catch(() => res.json({ "error": "Ошибка при удалении записи" }))
    },
    patchPost: (req, res) => {
        Post.findByIdAndUpdate(req.params.id, {
            text: req.body.text,
            user: req.body.user,
        }).then(() => res.json(`Record has been changed`))
            .catch(() => res.json({ "error": "Ошибка при изменении записи" }))
    }
}