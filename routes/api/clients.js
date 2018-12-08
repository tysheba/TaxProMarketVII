const router = require("express").Router();
const clientController = require("../../controllers/clientController");



router
  .route("/clients")
  .get(clientController.findAll)
  .post(clientController.create);


router
  .route("/clients/:id")
  .get(clientController.findById)
  .put(clientController.update)
  .delete(clientController.remove);

module.exports = router;