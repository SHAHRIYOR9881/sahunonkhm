const router = require("express").Router();
const OrganizationStructureController = require("../controller/organizationStructureController");
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
router.post("/api/organization_structure/create", TOKEN, ROLE("admin", "moderator"), uploads.array("image", 12), OrganizationStructureController.createData)
router.get("/api/organization_structure/all", OrganizationStructureController.getAll)
router.get("/api/organization_structure/:id", OrganizationStructureController.getSingle)
router.put("/api/organization_structure/:id", TOKEN, ROLE("admin", "moderator"), uploads.array("image", 12), OrganizationStructureController.updateSingleFile)
router.delete("/api/organization_structure/:id", TOKEN, ROLE("admin", "moderator"), OrganizationStructureController.deleteSingle)

module.exports = router;