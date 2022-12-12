const path = require("path");

exports.getIndex = (req, res, next) => {
  res.status(200).render("index", { pageTitle: "Splash Screen" });
};

exports.getLandingPage = (req, res, next) => {
  res
    .status(200)
    .render("home", {
      pageTitle: "Landing Page",
    });
};

exports.getAuthHomePage = (req, res, next) => {
  res
    .status(200)
    .render("authHomepage", {
      pageTitle: "Home Page",
    });
}

exports.getCategory = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "category.html"));
};

exports.getTerms = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "terms.html"));
};

exports.getAccount = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "accounts.html"));
};


exports.postContact = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
};
