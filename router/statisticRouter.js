const router = require("express").Router();
const StatisticController = require("../controller/statisticController");
const { TOKEN, ROLE } = require("../middleware/auth")

router.get("/api/statistic/all", TOKEN, ROLE("admin", "moderator"), StatisticController.getStatistic)

module.exports = router;