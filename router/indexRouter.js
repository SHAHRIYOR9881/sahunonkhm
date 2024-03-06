const router = require("express").Router();
const IndexController = require("../controller/indexController");

router.get("/api/client/index", IndexController.getIndex)

module.exports = router;