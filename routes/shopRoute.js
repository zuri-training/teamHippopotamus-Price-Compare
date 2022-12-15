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

// terms page router
router.get("/terms", productCtrl.getTerms);

router.get('/wishlist', isAuth, productCtrl.getWishList)

// Contact page router
router.get("/contact", productCtrl.postContact);

router.get("/search", productCtrl.getSearch);

router.get("/top-products", isAuth, productCtrl.getTopProdutcs);

router.get("/cart", isAuth, productCtrl.getCart);

module.exports = router;
