const User = require('../models/User.model')


module.exports.usersController = {
    getUser: async function(req, res) {
        try {
            let data = await User.findById(req.params.id)
            res.json(data)
        } catch (err) {
            res.json({"error": "Не удалось получить запись"})
        }
    },
    getUsers: async function(req, res) {
        try {
            let data = await User.find()
            res.json(data)
        } catch (err) {
            res.json({"error": "Не удалось получить записи"})
        }
    },
    postUser: async function(req, res) {
        try {
            await User.create({
                name: req.body.name,
                email: req.body.email
            })
            res.json('Record created')
        } catch (err) {
            res.json({"error": "Ошибка при добавлении записи"})
        }
    },
    deleteUser: async function(req, res) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.json('Record has been deleted')
        } catch (err) {
            res.json({"error": "Ошибка при удалении записи"})
        }
    }
}