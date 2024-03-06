const router = require('express').Router();
const { isAuth, roles } = require('../middleware/index')

router.get('/moderator/index', isAuth, roles("moderator"), async (req, res, next) => {
    res.render(
        "./page/moderator/index.ejs",
        { layout: "./layout/moderator.ejs", title: "Moderator | Asosiy sahifa" }
    )
})
router.get('/moderator/galery', isAuth, roles("moderator"), async (req, res, next) => {
    res.render(
        "./page/moderator/galery.ejs",
        { layout: "./layout/moderator.ejs", title: "Moderator | Fotolavhalar" }
    )
})
router.get('/moderator/news', isAuth, roles("moderator"), async (req, res, next) => {
    res.render(
        "./page/moderator/news.ejs",
        { layout: "./layout/moderator.ejs", title: "Moderator | Yangiliklar" }
    )
})
router.get('/moderator/organization-structure', isAuth, roles("moderator"), async (req, res, next) => {
    res.render(
        "./page/moderator/organization-structure.ejs",
        { layout: "./layout/moderator.ejs", title: "Moderator | Tashkiliy tuzilma" }
    )
})
router.get('/moderator/project', isAuth, roles("moderator"), async (req, res, next) => {
    res.render(
        "./page/moderator/project.ejs",
        { layout: "./layout/moderator.ejs", title: "Moderator | Loyihalar" }
    )
})
router.get('/moderator/regional-border', isAuth, roles("moderator"), async (req, res, next) => {
    res.render(
        "./page/moderator/regional-border.ejs",
        { layout: "./layout/moderator.ejs", title: "Moderator | Hududiy bo'limlar" }
    )
})
router.get('/moderator/staff', isAuth, roles("moderator"), async (req, res, next) => {
    res.render(
        "./page/moderator/staff.ejs",
        { layout: "./layout/moderator.ejs", title: "Moderator | Rahbariyat" }
    )
})
router.get('/moderator/vactination', isAuth, roles("moderator"), async (req, res, next) => {
    res.render(
        "./page/moderator/vactination.ejs",
        { layout: "./layout/moderator.ejs", title: "Moderator | Vaksinatsiya" }
    )
})
router.get('/moderator/video', isAuth, roles("moderator"), async (req, res, next) => {
    res.render(
        "./page/moderator/video.ejs",
        { layout: "./layout/moderator.ejs", title: "Moderator | Video lavhalar" }
    )
})
router.get('/moderator/contact', isAuth, roles("moderator"), async (req, res, next) => {
    res.render(
        "./page/moderator/contact.ejs",
        { layout: "./layout/moderator.ejs", title: "Moderator | Kontaktlar" }
    )
})
router.get('/moderator/profile', isAuth, roles("moderator"), async (req, res, next) => {
    res.render(
        "./page/moderator/profile.ejs",
        { layout: "./layout/moderator.ejs", title: "Moderator | Mening profilim" }
    )
})

module.exports = router