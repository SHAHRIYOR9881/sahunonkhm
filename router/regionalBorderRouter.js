const router = require("express").Router();
const RegionalBorderController = require("../controller/regionalBorderController");
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
router.post("/api/regional_border/create", TOKEN, ROLE("admin", "moderator"), uploads.array("image", 12), RegionalBorderController.createData)
router.get("/api/regional_border/all", RegionalBorderController.getAll)
router.get("/api/regional_border/:id", RegionalBorderController.getSingle)
router.put("/api/regional_border/context/:id", TOKEN, ROLE("admin", "moderator"), RegionalBorderController.updateSingleContaxt)
router.put("/api/regional_border/file/:id", TOKEN, ROLE("admin", "moderator"), uploads.array("image", 12), RegionalBorderController.updateSingleFile)
router.delete("/api/regional_border/:id", TOKEN, ROLE("admin", "moderator"), RegionalBorderController.deleteSingle)

module.exports = router;