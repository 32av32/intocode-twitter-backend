const Favorite = require('../models/Favorite.model')


module.exports.favoritesController = {
    getFavorites: async function(req, res) {
        try {
            let data = await Favorite.find(req.query.user ? { user: req.query.user } : {'': ''}).populate('post')
            res.json(data)
        } catch (err) {
            res.json({"error": "Не удалось получить записи"})
        }
    },
    postFavorite: async function(req, res) {
        try {
            await Favorite.create({
                post: req.body.post,
                user: req.body.user
            })
            res.json('Record created')
        } catch (err) {
            res.json({"error": "Ошибка при добавлении записи"})
        }
    },
    deleteFavorite: async function(req, res) {
        try {
            await Favorite.findByIdAndDelete(req.params.id)
            res.json('Record has been deleted')
        } catch (err) {
            res.json({"error": "Ошибка при удалении записи"})
        }
    }
}