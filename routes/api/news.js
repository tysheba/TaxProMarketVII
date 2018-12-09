const router = require("express").Router();
const db = require("./../../models");

// A GET route for scraping the Journal of Accountancy website
router
.route("/scrape")
.get(function (req, res) {
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
  router
  .route("articles")
  .get(function (req, res) {
    // Grab every document in the Articles collection
    db.Article.find({}).limit(5)
      .then(function (dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
      })
      .catch(function (err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
  module.exports = router;