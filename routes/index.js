const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const news = require("../models/Article")
const db = require("./../models")
const multer = require('multer');


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
})

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg'  || file.mimetype === 'image/png' || file.mimetype === 'gif' || file.mimetype === 'jpg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({
  storage: storage, 
  limits: {
    fileSize: 1024 * 1024 * 5
},
  fileFilter: fileFilter
});


// Basic route that sends the user first to the AJAX Page
router
.route("/")
.get(function(req, res) {
  // res.send("Welcome to Hot Restaurants!")
  res.sendFile(path.join(__dirname, "./../public/index.html"));
});

// API Routes
router
  .route('/taxpros')
  .get(function (req, res) {
      // Grab every document in the taxpros collection
      db.taxpros.find({})
        .then(function (dbtaxpros) {
          // If we were able to successfully find Professionals, send them back to the client
          res.json(dbtaxpros);
          // console.log(dbtaxpros);
        })
        .catch(function (err) {
          // If an error occurred, send it to the client
          res.json(err);
        });
    });
  //   res.send('Find A Taxpro')
  // });

  router
  .route('/taxpros')
  .post(upload.single('profileImage'), function (req, res) {
    console.log(req.file)
      db.taxpros.create(req.body, req.file.path)
      .then(dbModel => res.json(dbModel))
  });

router
.route('/clients')
.get(function(req, res){
  db.clients.find({})
  .then(function (dbclients){
    res.json(dbclients);
    // console.log(dbclients);
  })
  .catch(function(err){
    res.json(err)
  });
});

router.use("/api", apiRoutes);



module.exports = router;
