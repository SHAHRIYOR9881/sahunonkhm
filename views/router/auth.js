const router = require('express').Router()

router.get('/login', async (req, res, next) => {
    res.render(
        "./page/auth/login.ejs",
        { layout: "./layout/auth.ejs", title: "Kirish" }
    )
})

router.get('/404', async (req, res, next) => {
    res.render(
        "./page/auth/404.ejs",
        { layout: "./layout/auth.ejs", title: "Sahifa topilmadi" }
    )
})

module.exports = router