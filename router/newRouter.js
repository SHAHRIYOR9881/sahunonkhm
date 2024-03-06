const router = require("express").Router();
const NewsController = require("../controller/newController");
const multer = require('multer')
const md5 = require('md5')
const path = require('path')
const { TOKEN, ROLE } = require("../middleware/auth")
const uploads = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, './public/uploads')
        },
        filename: function (req, file, callback) {
            callback(null, `${md5(Date.now())}${path.extname(file.originalname)}`)
        }
    })
})
router.post("/api/news/create", TOKEN, ROLE("admin", "moderator"), uploads.array("image", 12), NewsController.createData)
router.get("/api/news/all", NewsController.getAll)
router.get("/api/news/:id", NewsController.getSingle)
router.put("/api/news/context/:id", TOKEN, ROLE("admin", "moderator"), NewsController.updateSingleContaxt)
router.put("/api/news/file/:id", TOKEN, ROLE("admin", "moderator"), uploads.array("image", 12), NewsController.updateSingleFile)
router.delete("/api/news/:id", TOKEN, ROLE("admin", "moderator"), NewsController.deleteSingle)

module.exports = router;