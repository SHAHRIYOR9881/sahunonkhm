const router = require('express').Router()
const uz = require("../../i18n/uz.json")
const ru = require("../../i18n/ru.json")

// Asosiy sahifa
router.get('/', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/index.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.asosiy_sahifa : uz.asosiy_sahifa,
            lang: lang
        }
    )
})

// Hujjatlar
router.get('/document/uzbekistan-laws', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/documents/uzbekistan-laws.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.media_1 : uz.media_1,
            lang: lang
        }
    )
})
router.get('/document/organization-laws', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/documents/organization-laws.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.tashkilot_hujjatlari : uz.tashkilot_hujjatlari,
            lang: lang
        }
    )
})
router.get('/document/president-laws', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/documents/president-laws.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.prezident_qonunlari : uz.prezident_qonunlari,
            lang: lang
        }
    )
})
router.get('/document/ministry-laws', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/documents/ministry-laws.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.vazirlar_mahkamasi_qonunlari : uz.vazirlar_mahkamasi_qonunlari,
            lang: lang
        }
    )
})
// Biz haqimizda
router.get('/about-us', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/about-us.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.umumiy_malumot : uz.umumiy_malumot,
            lang: lang
        }
    )
})
// Biz haqimizda
router.get('/contact', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/contact.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.matbuot_boglanish : uz.matbuot_boglanish,
            lang: lang
        }
    )
})
// Hududiy bo'linma va rahbarlar
router.get('/regional-border', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/regional-border.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.xududiy_bolinma : uz.xududiy_bolinma,
            lang: lang
        }
    )
})
router.get('/regional-border-director', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/regional-border-director.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.xududiy_bolinma_rahbari : uz.xududiy_bolinma_rahbari,
            lang: lang
        }
    )
})
// Videolavhalar sahida
router.get('/video', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/video.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.videolavhalar : uz.videolavhalar,
            lang: lang
        }
    )
})

// Fotolavhalar sahida
router.get('/galery', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/galery/galery.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.fotolavhalar : uz.fotolavhalar,
            lang: lang
        }
    )
})
// Yangiliklar sahifasi
router.get('/news', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/news/news.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.songi_yangiliklar : uz.songi_yangiliklar,
            lang: lang
        }
    )
})
// Rahbariyat
router.get('/guidance', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/guidance.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.rahbariyat : uz.rahbariyat,
            lang: lang
        }
    )
})
// Hodimlar
router.get('/staff', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/staff.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.hodimlar : uz.hodimlar,
            lang: lang
        }
    )
})
// Hodimlar
router.get('/organization-structure', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/organization-structure.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.tashkiliy_tuzilma : uz.tashkiliy_tuzilma,
            lang: lang
        }
    )
})
// Loyihalar
router.get('/project', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/project/project.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.loyihalar : uz.loyihalar,
            lang: lang
        }
    )
})
// Vaksinatsiya
router.get('/vacination', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/vacination.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.vaksinatsiya : uz.vaksinatsiya,
            lang: lang
        }
    )
})
// Covid-19
router.get('/covid', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/covid.ejs",
        {
            layout: "./layout/client.ejs",
            title: "Covid-19",
            lang: lang
        }
    )
})



// Detallar
router.get('/galery/details/:id', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/galery/galeryDetails.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.fotolavhalar : uz.fotolavhalar,
            lang: lang
        }
    )
})
router.get('/news/details/:id', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/news/newsDetails.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.songi_yangiliklar : uz.songi_yangiliklar,
            lang: lang
        }
    )
})
router.get('/project/details/:id', async (req, res, next) => {
    const lang = req.session.ulang;
    res.render(
        "./page/client/project/projectDetails.ejs",
        {
            layout: "./layout/client.ejs",
            title: lang == "ru" ? ru.loyihalar : uz.loyihalar,
            lang: lang
        }
    )
})





module.exports = router