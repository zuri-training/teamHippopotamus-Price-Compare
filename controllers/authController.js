const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.getSignUp = (req, res, next) => {
  res
    .status(200)
    .render("signup", { pageTitle: "Register Page" });
  // res.sendFile(path.join(__dirname, '../', 'views', 'signup.html'))
};

exports.getLogin = (req, res, next) => {
  res.status(200).render("login", {
    pageTitle: "Login Page",
    errorMessage: req.flash('error')
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        req.flash('error', 'Invalid Credientials')
        return res.redirect("/login");
      }
      bcrypt
        .compare(password, user.password)
        .then((passwordMatch) => {
          if (passwordMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user
            return req.session.save(err => {
                console.log(err)
                res.redirect("/authhome");
            })
          }
          res.redirect("/login");
        })
        .catch((err) => {
          console.log(err);
          res.redirect("/login");
        });
    })
    .catch((err) => console.log(err));
};

exports.postSignUp = (req, res, next) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const phone = req.body.number;
  const password = req.body.password;
  User.findOne({ email })
    .then((userData) => {
      if (userData) {
        return res.redirect("/register");
      }
      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            firstname,
            lastname,
            email,
            phone,
            password: hashedPassword,
          });
          return user.save();
        })
        .then((result) => {
          res.redirect("/login");
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err)
    res.redirect('/')
  })
}