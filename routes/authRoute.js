const express = require('express')

const router = express.Router()

const authCtrl = require('../controllers/authController')

const isAuth = require("../middlewares/is-auth");

// login page router
router.get('/login', authCtrl.getLogin)

// Sign Up page router
router.get('/register', authCtrl.getSignUp)

router.post('/login', authCtrl.postLogin)


router.post('/register', authCtrl.postSignUp)

router.post('/logout', authCtrl.postLogout)

router.get('/account', isAuth, authCtrl.getUser)

router.get('/forgotPassword', authCtrl.getForgotPassword)

module.exports = router