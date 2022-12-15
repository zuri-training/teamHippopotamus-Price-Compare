const express = require("express");

const productCtrl = require("../controllers/productController");

const router = express.Router();

const isAuth = require("../middlewares/is-auth");

// homepage router
router.get("/", productCtrl.getIndex);

router.get("/home", productCtrl.getLandingPage);

router.get("/authhome", isAuth, productCtrl.getAuthHomePage);

// category page router
router.get("/categories", isAuth, productCtrl.getCategory);

// account page router
router.get("/accounts", isAuth, productCtrl.getAccount);

// terms page router
router.get("/terms", productCtrl.getTerms);

router.get('/wishlist', isAuth, productCtrl.getWishList)

router.get('/cart', isAuth, productCtrl.getCart)

// Contact page router
router.get("/contact", productCtrl.postContact);

module.exports = router;
