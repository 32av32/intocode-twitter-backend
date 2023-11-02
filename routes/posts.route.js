const { Router } = require('express')
const { postsController } = require('../controllers/posts.controller')
const router = Router()


router.get('/posts', postsController.getPosts)
router.get('/posts/:id', postsController.getPost)
router.post('/posts', postsController.postPost)
router.delete('/posts/:id', postsController.deletePost)
router.patch('/posts/:id', postsController.patchPost)

module.exports = router;