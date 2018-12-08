const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const news = require("../models/Article")
const db = require("./../models")

// API Routes
router
  .route('/taxpros')
  .get(function (req, res) {
      // Grab every document in the taxpros collection
      db.taxpros.find({})
        .then(function (dbtaxpros) {
          // If we were able to successfully find Professionals, send them back to the client
          res.json(dbtaxpros);
          console.log(dbtaxpros);
        })
        .catch(function (err) {
          // If an error occurred, send it to the client
          res.json(err);
        });
    });
  //   res.send('Find A Taxpro')
  // });

router
.route('/clients')
.get(function(req, res){
  db.clients.find({})
  .then(function (dbclients){
    res.json(dbclients);
    console.log(dbclients);
  })
  .catch(function(err){
    res.json(err)
  });
});

router.use("/api", apiRoutes);



module.exports = router;
