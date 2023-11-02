const User = require('../models/User.model')


module.exports.usersController = {
    getUser: (req, res) => {
        User.findById(req.params.id)
            .then(data => res.json(data))
            .catch(() => res.json({"error": "Не удалось получить запись"}))
    },
    getUsers: (req, res) => {
        User.find()
            .then(data => res.json(data))
            .catch(() => res.json({"error": "Не удалось получить записи"}))
    },
    postUser: (req, res) => {
        User.create({
            name: req.body.name,
            email: req.body.email
        }).then(() => res.json('Record created'))
            .catch(() => res.json({ "error": "Ошибка при добавлении записи" }))
    },
    deleteUser: (req, res) => {
        User.findByIdAndDelete(req.params.id).then(() => {
            res.json(`Record has been deleted`)
        }).catch(() => res.json({ "error": "Ошибка при удалении записи" }))
    }
}