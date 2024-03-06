const router = require("express").Router();
const VideoController = require("../controller/videoController");
const { TOKEN, ROLE } = require("../middleware/auth")

router.post("/api/video/create", TOKEN, ROLE("admin", "moderator"), VideoController.createData)
router.get("/api/video/all", VideoController.getAll)
router.get("/api/video/:id", VideoController.getSingle)
router.put("/api/video/:id", TOKEN, ROLE("admin", "moderator"), VideoController.updateSingleContaxt)
router.delete("/api/video/:id", TOKEN, ROLE("admin", "moderator"), VideoController.deleteSingle)

module.exports = router;