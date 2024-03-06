const router = require("express").Router();
const UserController = require("../controller/userController")
const { TOKEN, ROLE } = require("../middleware/auth")

router.post("/api/user/create", UserController.register)
router.post("/api/user/login", UserController.login)
router.get("/api/user/decode", TOKEN, ROLE("admin", "moderator"), UserController.decodeToken)
router.get("/api/user/destroy_session", UserController.destroySession)
router.get("/api/user/all", TOKEN, ROLE("admin"), UserController.getAll)
router.get("/api/user/:id", TOKEN, ROLE("admin", "moderator"), UserController.getSingle)
router.put("/api/user/:id", TOKEN, ROLE("admin", "moderator"), UserController.updateSingle)
router.delete("/api/user/:id", TOKEN, ROLE("admin"), UserController.deleteSingle)

module.exports = router;