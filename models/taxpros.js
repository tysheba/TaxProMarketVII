// Require mongoose
const mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new TaxProSchema object
// This is similar to a Sequelize model
const TaxProSchema = new Schema({
    // `fName` must be of type String. We "trim" it to remove any trailing white space
    // `fName` is a required field, and a custom error message is thrown if it is not supplied

    fName: {
        type: String,
        trim: true,
        required: "Name is Required"
    },
    title: String,

    profileImage: {
        type: String,
        default: "http://placehold.it/180"
    },

    facebook: String,
    linkedIn: String,

    //Specify other designation
    designations: {
        type: Array
    },

    officeAddress: {
        type: String,
        required: "please enter office address"
    },

    officeCity: {
        type: String,
    },
    officeState: {
        type: String,
        max: 2,
    },
    zipcode: {
        type: Number,
        required: true
    },

    phoneNumber: {
        type: String,
        default: "(555) 555-5555"
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
        default: "email@realemail.com"
    },

    // Years in practice
    year: {
        type: String,
        default: "the 2000's"
    },
    // Services
    //Bookkeeping, Tax planning, Tax preparation, Tax Resolution, valuation services, refund loans, refund transfer, e-filin
    services: Array,
    // Specializations
    // small business, real estate investor, partnerships, self-employed, earned income credit, high net worth, expat, litigation)
    specializations: Array,

    // `date` must be of type Date. The default value is the current date
    createdDate: {
        type: Date,
        default: Date.now
    },
    taxProRating: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Note model
            ref: "ratings"
        }
    ]
});

// This creates our model from the above schema, using mongoose's model method
const Taxpros = mongoose.model("Taxpros", TaxProSchema);

// Export the TaxPros model
module.exports = Taxpros;
