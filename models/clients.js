// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new TaxProSchema object
// This is similar to a Sequelize model
var ClientSchema = new Schema({
    // `fName` must be of type String. We "trim" it to remove any trailing white space
    // `fName` is a required field, and a custom error message is thrown if it is not supplied
    fName: {
        type: String,
        trim: true,
        required: "Full Name is Required"
    },
    // Is a CPA
    cpaDes: Boolean,
    // Is an Enrolled Agent
    eaDes: Boolean,
    // Is a Tax Attorney
    taxAttDes: Boolean,

    //Specify other designation
    otherDesignation: {
        type: String,
        trim: true
    },

    homeAddress: {
        type: String,
        required: "please enter office address"
    },

    homeAddress2: {
        type: String
    },
    homeCity: {
        type: String,
    },
    homeState: {
        type: String,
        max: 2,
    },
    zipcode: {
        type: Number,
        required: true
    },
    // Years in practice
    yearsOfExp: {
        type: Number,
        min: 4,
        max: 4
    },
    // Services
    //Bookkeeping, Tax planning, Tax preparation, Tax  Resolution, valuation services, refund loans, refund transfer, e-filin
    services: Array,
    
    // Specializations
    // small business, real estate investor, partnerships, self-employed, earned income credit, high net worth, expat, litigation)
    specializations: Array,

    // `date` must be of type Date. The default value is the current date
    createdDate: {
        type: Date,
        default: Date.now
    }
});

// This creates our model from the above schema, using mongoose's model method
var Clients = mongoose.model("Clients", ClientSchema);

// Export the TaxPros model
module.exports = Clients;