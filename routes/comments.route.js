const { Router } = require('express')
const { commentsController } = require('../controllers/comments.controller')
const router = Router()


router.get('/comments', commentsController.getComments)
router.post('/comments', commentsController.postComment)
router.delete('/comments/:id', commentsController.deleteComment)
router.patch('/comments/:id', commentsController.patchComment)

module.exports = router;