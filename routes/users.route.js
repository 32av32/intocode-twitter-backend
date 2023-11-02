const { Router } = require('express')
const { usersController } = require('../controllers/users.controller')
const router = Router()


router.get('/users', usersController.getUsers)
router.get('/users/:id', usersController.getUser)
router.post('/users', usersController.postUser)
router.delete('/users/:id', usersController.deleteUser)

module.exports = router;