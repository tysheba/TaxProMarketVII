const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
const multer = require('multer');
const path = require('path')

// Require all models
const db = require("./models");

const PORT = process.env.PORT || 3001;

// Initialize Express
const app = express();



// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1000000 }, // size limit 1MB
//   fileFilter: function (req, file, cb) {
//     checkFileType(file, cb)
//   }
// }).single('profileImage')//name of the field


// // Function check file type

// function checkFileType(file, cb) {
//   // Allowed extensions
//   const filetypes = /jpeg|jpg|png|gif/;
//   // check ext
//   const extname = filetypes.test(path.extname(file.originalname).toLowercase());
//   // check mime
//   const mimetype = filetypes.test(file.mimetype);

//   if (mimetype && extname) {
//     return cb(null, true);
//   } else {
//     cb('Error: Images Only!')
//   }
// }

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
const axios = require("axios");
const cheerio = require("cheerio");



// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve up static assets
app.use(express.static(path.join(__dirname, 'public')));

// Connect to the Mongo DB
const dbURI = require('./config/keys').mongoURI;
mongoose.connect(process.env.dbURI || "mongodb://localhost/taxProMarket")
  .then(() => console.log('MongoDb Connected...'))
  .catch(err => console.log(err));

// Routes

// Add routes, both API and view
app.use(routes);

// A GET route for scraping the Journal of Accountancy website
app.get("/scrape", function (req, res) {
  // First, we grab the body of the html with request
  axios.get("https://www.journalofaccountancy.com/topics/tax.html")
    .then(function (response) {
      // Then, we load that into cheerio and save it to $ for a shorthand selector
      var $ = cheerio.load(response.data);

      // Now, we grab every article tag, and do the following:
      $("article").each(function (i, element) {
        // Save an empty result object
        var result = {};

        // Add the title, summary, and href of every link, and save them as properties of the result object
        result.title = $(this)
          .find("h1")
          .children("a")
          .text();
        result.summary = $(this)
          .find("p")
          .text();
        result.link = "https://www.journalofaccountancy.com" + $(this)
          .find("h1")
          .children("a")
          .attr("href");


        // Create a new Article using the `result` object built from scraping
        db.Article.create(result)
          .then(function (dbArticle) {
            // View the added result in the console
            console.log(dbArticle);
          })
          .catch(function (err) {
            // If an error occurred, send it to the client
            return res.json(err);
          });
      });

      // If we were able to successfully scrape and save an Article, send a message to the client
      res.send("Scrape Complete");
    });
});


// Route for getting all Articles from the db
app.get("/articles", function (req, res) {
  // Grab every document in the Articles collection
  db.Article.find({})
    .then(function (dbArticle) {
      // If we were able to successfully find Articles, send them back to the client
      res.json(dbArticle);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});




// Start the server
app.listen(PORT, function () {
  console.log("App running on port " + PORT + "!");
});
