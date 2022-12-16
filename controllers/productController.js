const path = require("path");

exports.getIndex = (req, res, next) => {
  res.status(200).render("index", { pageTitle: "Splash Screen" });
};

exports.getLandingPage = (req, res, next) => {
  res.status(200).render("home", {
    pageTitle: "Landing Page",
  });
};

exports.getAuthHomePage = (req, res, next) => {
  res.status(200).render("authHomepage", {
    pageTitle: "Home Page",
  });
};

exports.getCategory = (req, res, next) => {
  res.status(200).render("categories", { pageTitle: "Categories Page" });
};

exports.getTerms = (req, res, next) => {
  res.status(200).render("terms", { pageTitle: "Terms Of Use" });
};

exports.postContact = (req, res, next) => {
  res.status(200).render("contact", { pageTitle: "Contact Us Page" });
};

exports.getWishList = (req, res, next) => {
  res.status(200).render("wishlist", { pageTitle: "WishList" });
};

exports.getSearch = (req, res, next) => {
  res.status(200).render("search", { pageTitle: "Search" });
};

exports.getTopProdutcs = (req, res, next) => {
  res.status(200).render("top-products", { pageTitle: "Top Products" });
};

exports.getCart = (req, res, next) => {
  res.status(200).render("cart", { pageTitle: "My Cart" });
};

exports.getSelectProduct = (req, res, next) => {
  res.status(200).render("selectProduct", { pageTitle: "Select Product" });
};
