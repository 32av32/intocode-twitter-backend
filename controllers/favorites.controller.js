const Favorite = require('../models/Favorite.model')


module.exports.favoritesController = {
    getFavorites: (req, res) => {
        Favorite.find(req.query.user ? { user: req.query.user } : {'': ''}).populate('post')
            .then(data => res.json(data))
            .catch(() => res.json({"error": "Не удалось получить записи"}))
    },
    postFavorite: (req, res) => {
        Favorite.create({
            post: req.body.post,
            user: req.body.user
        }).then(() => res.json('Record created'))
            .catch(() => res.json({ "error": "Ошибка при добавлении записи" }))
    },
    deleteFavorite: (req, res) => {
        Favorite.findByIdAndDelete(req.params.id).then(() => {
            res.json(`Record has been deleted`)
        }).catch(() => res.json({ "error": "Ошибка при удалении записи" }))
    }
}