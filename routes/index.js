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


// Basic route that sends the user first to the Home Page
router
.route("/")
.get(function(req, res) {
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
  .route('/taxpros/:id')
  .get(function (req, res){
    //Using thisID passed into the  id parameter, prepare a query that find the matching record
    db.taxpros.findOne({ _id:req.params.id})
    .then(function(dbtaxpros) {
      res.json(dbtaxpros);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
  })

// Update just one note by an id
// app.post("/taxpros/:id", function(req, res) {
//   // When searching by an id, the id needs to be passed in
//   // as (mongojs.ObjectId(IdYouWantToFind))

//   // Update the profile that matches the object id
//   db.taxpros.update(
//     {
//       _id: mongojs.ObjectId(req.params.id)
//     },
//     {
//       // Set the title, note and modified parameters
//       // sent in the req body.
//       $set: {
//         title: req.body.title,
//         fName: req.body.fName,
//         year: req.body.year,
//         facebook: req.body.facebook,
//         linkedIn: req.body.linkedIn,
//         zipcode: req.body.zipcode,
//         officeAddress: req.body.address,
//         officeCity: req.body.city,
//         officeState: req.body.state
//       }
//     },
//     function(error, edited) {
//       // Log any errors from mongojs
//       if (error) {
//         console.log(error);
//         res.send(error);
//       }
//       else {
//         // Otherwise, send the mongojs response to the browser
//         // This will fire off the success function of the ajax request
//         console.log(edited);
//         res.send(edited);
//       }
//     }
//   );
// });

router.use("/api", apiRoutes);



module.exports = router;
