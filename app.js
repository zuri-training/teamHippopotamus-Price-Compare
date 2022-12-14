const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const csrf = require("csurf");
const flash = require('connect-flash')

const app = express();
const store = new MongoDBStore({
  uri: process.env.MONGO_URL,
  collection: "sessions",
});

const csrfProtection = csrf();

// Template Engines
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "logo")));

const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

const shopRouter = require("./routes/shopRoute");
const authRoute = require("./routes/authRoute");
const User = require("./models/userModel");

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "this is my song",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

// app.use(csrfProtection);
app.use(flash())

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  // res.locals.csrfToken = req.csrfToken();
  next();
});

//Routes Middleware
// app.use('/admin')
app.use(shopRouter);
app.use(authRoute);

app.use((req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    isAuthenticated: req.session.isLoggedIn,
  });
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(
        `Server is running successfully on port ${port} and connected to DB successfully`
      );
    });
  })
  .catch((err) => console.log(err));
