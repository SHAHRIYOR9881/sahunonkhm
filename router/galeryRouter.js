const router = require("express").Router();
const GaleryController = require("../controller/galeryController");
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
router.post("/api/galery/create", TOKEN, ROLE("admin", "moderator"), uploads.array("image", 12), GaleryController.createData)
router.get("/api/galery/all", GaleryController.getAll)
router.get("/api/galery/:id", GaleryController.getSingle)
router.put("/api/galery/context/:id", TOKEN, ROLE("admin", "moderator"), GaleryController.updateSingleContaxt)
router.put("/api/galery/file/:id", TOKEN, ROLE("admin", "moderator"), uploads.array("image", 12), GaleryController.updateSingleFile)
router.delete("/api/galery/:id", TOKEN, ROLE("admin", "moderator"), GaleryController.deleteSingle)

module.exports = router;