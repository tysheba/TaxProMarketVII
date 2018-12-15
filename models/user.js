// Require mongoose
const mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TaxProSchema object
// This is similar to a Sequelize model
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        default: "email@realemail.com"
    },
password: {
    type: String,
    required: true
}
})

// This creates our model from the above schema, using mongoose's model method
const User = mongoose.model("User", userSchema);

// Export the TaxPros model
module.exports = User;
