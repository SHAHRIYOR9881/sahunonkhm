const router = require("express").Router();
const ContactController = require("../controller/contactController");
const { TOKEN, ROLE } = require("../middleware/auth")

router.post("/api/contact/create", TOKEN, ROLE("admin", "moderator"), ContactController.createData)
router.get("/api/contact/all", ContactController.getAll)
router.get("/api/contact/:id", ContactController.getSingle)
router.put("/api/contact/:id", TOKEN, ROLE("admin", "moderator"), ContactController.updateSingleContaxt)
router.delete("/api/contact/:id", TOKEN, ROLE("admin", "moderator"), ContactController.deleteSingle)

module.exports = router;