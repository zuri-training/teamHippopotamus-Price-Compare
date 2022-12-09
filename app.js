const express = require('express')
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000

const shopRouter = require('./routes/shopRoute')

// middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Template Engines
app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "logo")));



//Routes Middleware
// app.use('/admin')
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'})
})

app.listen(port, () => {
    console.log(`Server is running successfully on port ${port}`)
})