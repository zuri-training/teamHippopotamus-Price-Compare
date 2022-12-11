const path = require("path");

exports.getIndex = (req, res, next) => {
  res.status(200).render("index", { pageTitle: "Splash Screen" });
};

exports.getLandingPage = (req, res, next) => {
  res
    .status(200)
    .render("landing", {
      pageTitle: "Landing Page",
      isAuthenticated: req.isLoggedIn,
    });
};

exports.getCategory = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "category.html"));
};

exports.getTerms = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "terms.html"));
};

exports.getAccount = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "accounts.html"));
};

exports.getSignUp = (req, res, next) => {
  res.status(200).render("signup", { pageTitle: "Register Page" });
  // res.sendFile(path.join(__dirname, '../', 'views', 'signup.html'))
};

exports.postContact = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
};
