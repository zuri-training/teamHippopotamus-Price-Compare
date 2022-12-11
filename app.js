const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;

const shopRouter = require("./routes/shopRoute");
const authRoute = require("./routes/authRoute");

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Template Engines
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "logo")));

//Routes Middleware
// app.use('/admin')
app.use(shopRouter);
app.use(authRoute);

app.use((req, res, next) => {
  res.status(404).render("404", {
    pageTitle: "Page Not Found",
    isAuthenticated: req.isLoggedIn,
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
