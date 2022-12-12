const express = require('express')

const router = express.Router()

const authCtrl = require('../controllers/authController')

// login page router
router.get('/login', authCtrl.getLogin)

// Sign Up page router
router.get('/register', authCtrl.getSignUp)

router.post('/login', authCtrl.postLogin)


router.post('/register', authCtrl.postSignUp)

router.post('/logout', authCtrl.postLogout)

module.exports = router