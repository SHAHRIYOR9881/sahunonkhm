const router = require("express").Router();
const VactinationController = require("../controller/vactinationController");
const { TOKEN, ROLE } = require("../middleware/auth")

router.post("/api/vactination/create", TOKEN, ROLE("admin", "moderator"), VactinationController.createData)
router.get("/api/vactination/all", VactinationController.getAll)
router.get("/api/vactination/:id", VactinationController.getSingle)
router.put("/api/vactination/:id", TOKEN, ROLE("admin", "moderator"), VactinationController.updateSingleContaxt)
router.delete("/api/vactination/:id", TOKEN, ROLE("admin", "moderator"), VactinationController.deleteSingle)

module.exports = router;