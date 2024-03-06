const router = require("express").Router();
const StaffController = require("../controller/staffController");
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

router.post("/api/staff/create", TOKEN, ROLE("admin", "moderator"), uploads.array("image", 12), StaffController.createData)
router.get("/api/staff/all", StaffController.getAll)
router.get("/api/staff/filter", StaffController.filterData)
router.get("/api/staff/:id", StaffController.getSingle)
router.put("/api/staff/context/:id", TOKEN, ROLE("admin", "moderator"), StaffController.updateSingleContaxt)
router.put("/api/staff/file/:id", TOKEN, ROLE("admin", "moderator"), uploads.array("image", 12), StaffController.updateSingleFile)
router.delete("/api/staff/:id", TOKEN, ROLE("admin", "moderator"), StaffController.deleteSingle)

module.exports = router;