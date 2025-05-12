const express = require('express')
const router = express.Router()

const authController = require('../controllers/authController.js')

router.post('/sign-up', authController.registerUser)

router.get('/:id',authController.)

module.exports = router