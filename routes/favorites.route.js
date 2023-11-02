const { Router } = require('express')
const { favoritesController } = require('../controllers/favorites.controller')
const router = Router()


router.get('/favorites', favoritesController.getFavorites)
router.post('/favorites', favoritesController.postFavorite)
router.delete('/favorites/:id', favoritesController.deleteFavorite)

module.exports = router;