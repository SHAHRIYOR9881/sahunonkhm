const router = require('express').Router();
const { isAuth, roles } = require('../middleware/index')

router.get('/admin/index', isAuth, roles("admin"), async (req, res, next) => {
    res.render(
        "./page/admin/index.ejs",
        { layout: "./layout/admin.ejs", title: "Admin | Asosiy sahifa" }
    )
})
router.get('/admin/galery', isAuth, roles("admin"), async (req, res, next) => {
    res.render(
        "./page/admin/galery.ejs",
        { layout: "./layout/admin.ejs", title: "Admin | Fotolavhalar" }
    )
})
router.get('/admin/news', isAuth, roles("admin"), async (req, res, next) => {
    res.render(
        "./page/admin/news.ejs",
        { layout: "./layout/admin.ejs", title: "Admin | Yangiliklar" }
    )
})
router.get('/admin/organization-structure', isAuth, roles("admin"), async (req, res, next) => {
    res.render(
        "./page/admin/organization-structure.ejs",
        { layout: "./layout/admin.ejs", title: "Admin | Tashkiliy tuzilma" }
    )
})
router.get('/admin/project', isAuth, roles("admin"), async (req, res, next) => {
    res.render(
        "./page/admin/project.ejs",
        { layout: "./layout/admin.ejs", title: "Admin | Loyihalar" }
    )
})
router.get('/admin/regional-border', isAuth, roles("admin"), async (req, res, next) => {
    res.render(
        "./page/admin/regional-border.ejs",
        { layout: "./layout/admin.ejs", title: "Admin | Hududiy bo'limlar" }
    )
})
router.get('/admin/staff', isAuth, roles("admin"), async (req, res, next) => {
    res.render(
        "./page/admin/staff.ejs",
        { layout: "./layout/admin.ejs", title: "Admin | Rahbariyat" }
    )
})
router.get('/admin/user', isAuth, roles("admin"), async (req, res, next) => {
    res.render(
        "./page/admin/user.ejs",
        { layout: "./layout/admin.ejs", title: "Admin | Xodimlar" }
    )
})
router.get('/admin/vactination', isAuth, roles("admin"), async (req, res, next) => {
    res.render(
        "./page/admin/vactination.ejs",
        { layout: "./layout/admin.ejs", title: "Admin | Vaksinatsiya" }
    )
})
router.get('/admin/video', isAuth, roles("admin"), async (req, res, next) => {
    res.render(
        "./page/admin/video.ejs",
        { layout: "./layout/admin.ejs", title: "Admin | Video lavhalar" }
    )
})
router.get('/admin/contact', isAuth, roles("admin"), async (req, res, next) => {
    res.render(
        "./page/admin/contact.ejs",
        { layout: "./layout/admin.ejs", title: "Admin | Kontaktlar" }
    )
})
router.get('/admin/profile', isAuth, roles("admin"), async (req, res, next) => {
    res.render(
        "./page/admin/profile.ejs",
        { layout: "./layout/admin.ejs", title: "Admin | Mening profilim" }
    )
})

module.exports = router