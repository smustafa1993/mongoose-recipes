const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController.js')

router.post('/sign-up', authController.registerUser)

router.post('/sign-in',authController.signInUser)

router.get('/sign-out',authController.signOutUser)

module.exports = router