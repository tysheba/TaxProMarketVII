const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const KiplingerSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  //'summary' is not required and a type of string
  summary: {
    type: String,
    required: false
  },
  // `link` is required and of type String
  link: {
    type: String,
    required: true
  },
  imageURL: {
    type: String
  },
  createdDate: {
    type: Date,
    default: Date.now
}
});

// This creates our model from the above schema, using mongoose's model method
const Kiplinger = mongoose.model("Kiplinger", KiplingerSchema);

// Export the Article model
module.exports = Kiplinger;
