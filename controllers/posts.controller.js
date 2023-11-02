const Post = require('../models/Post.model')


module.exports.postsController = {
    getPost: async function(req, res) {
        try {
            let data = await Post.findById(req.params.id)
            res.json(data)
        } catch (err) {
            res.json({"error": "Не удалось получить запись"})
        }
    },
    getPosts: async function(req, res) {
        try {
            let data = await Post.find(req.query.user ? { user: req.query.user } : null).populate('user')
            res.json(data)
        } catch (err) {
            res.json({"error": "Не удалось получить записи"})
        }
    },
    postPost: async function(req, res) {
        try {
            await Post.create({
                text: req.body.text,
                user: req.body.user,
            })
            res.json('Record created')
        } catch (err) {
            res.json({"error": "Ошибка при добавлении записи"})
        }
    },
    deletePost: async function(req, res) {
        try {
            await Post.findByIdAndDelete(req.params.id)
            res.json('Record has been deleted')
        } catch (err) {
            res.json({"error": "Ошибка при удалении записи"})
        }
    },
    patchPost: async function(req, res) {
        try {
            await Post.findByIdAndUpdate(req.params.id, {
                text: req.body.text,
                user: req.body.user,
            })
            res.json('Record has been changed')
        } catch (err) {
            res.json({"error": "Ошибка при изменении записи"})
        }
    }
}