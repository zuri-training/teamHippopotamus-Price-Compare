const express = require("express");

const productCtrl = require("../controllers/productController");

const router = express.Router();





// homepage router
router.get("/", productCtrl.getIndex);

router.get('/home', productCtrl.getLandingPage)

// category page router
router.get('/categories', productCtrl.getCategory)

// account page router
router.get('/accounts', productCtrl.getAccount)

// terms page router
router.get('/terms', productCtrl.getTerms)

// Sign Up page router
router.get('/register', productCtrl.getSignUp)

// router.post('/register', productCtrl.postSignUp)

// Contact page router
router.get('/contact', productCtrl.postContact)

module.exports = router
