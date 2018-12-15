const router = require("express").Router();
const taxproController = require("../../controllers/taxproController");



router
  .route("/taxpros")
  .get(taxproController.findAll)
  .post(taxproController.create);


router
  .route("/taxpros/:id")
  .get(taxproController.findById)
  .put(taxproController.update)
  .delete(taxproController.remove);

module.exports = router;
