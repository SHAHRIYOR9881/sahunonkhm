const router = require("express").Router();
const ProjectController = require("../controller/projectController");
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
router.post("/api/project/create", TOKEN, ROLE("admin", "moderator"), uploads.array("image", 12), ProjectController.createData)
router.get("/api/project/all", ProjectController.getAll)
router.get("/api/project/:id", ProjectController.getSingle)
router.put("/api/project/context/:id", TOKEN, ROLE("admin", "moderator"), ProjectController.updateSingleContaxt)
router.put("/api/project/file/:id", TOKEN, ROLE("admin", "moderator"), uploads.array("image", 12), ProjectController.updateSingleFile)
router.delete("/api/project/:id", TOKEN, ROLE("admin", "moderator"), ProjectController.deleteSingle)

module.exports = router;