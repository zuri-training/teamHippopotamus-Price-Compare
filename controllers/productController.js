const path = require('path')



exports.getIndex = (req, res, next) => {
    res.status(200).render('index', {pageTitle: 'Splash Screen'})
}

exports.getLandingPage = (req, res, next) => {
    res.status(200).render('landing', {pageTitle: 'Landing Page'})
}

exports.getCategory = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'category.html'))
}

exports.getTerms = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'terms.html'))
}

exports.getAccount = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'accounts.html'))
}

exports.postSignUp = (req, res, next) => {
    res.status(200).render('signup', {pageTitle: 'Register Page'})
    // res.sendFile(path.join(__dirname, '../', 'views', 'signup.html'))
}

exports.postLogin = (req, res, next) => {
    res.status(200).render('login', {pageTitle: 'Login Page'})
    // res.sendFile(path.join(__dirname, '../', 'views', 'login.html'))
}

exports.postContact = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'))
}