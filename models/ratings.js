// Require mongoose
const mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TaxProSchema object
// This is similar to a Sequelize model
const RatingShema = new Schema({
    // `fName` must be of type String. We "trim" it to remove any trailing white space
    // `fName` is a required field, and a custom error message is thrown if it is not supplied

    score: {
        type: Number,
        min: 0,
        max: 5
    },
    comment: {
        type: String
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const ratings = mongoose.model("ratings", RatingShema);

// Export the ratings model
module.exports = ratings;