const router = require("express").Router();
const taxProsRoutes = require("./taxPros");
const clientRoutes = require("./clients")
const newsRoutes = require("./news")

// TaxPro routes
router.use("/taxpros", taxProsRoutes);
router.use("/clients", clientRoutes);
router.use("/articles", newsRoutes);

module.exports = router;