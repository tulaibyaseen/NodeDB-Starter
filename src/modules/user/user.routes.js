const express = require('express')
const router = express.Router()
const userController = require('./user.controller')
const authMiddleware = require('../../middlewares/auth.middlware')

router.get('/me', authMiddleware, userController.getProfile)
router.put('/me', authMiddleware, userController.updateProfile)

module.exports = router
