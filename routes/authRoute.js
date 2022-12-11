const express = require('express')

const router = express.Router()

const authCtrl = require('../controllers/authController')

// login page router
router.get('/login', authCtrl.getLogin)

router.post('/login', authCtrl.postLogin)

module.exports = router