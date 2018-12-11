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
    profileImage: {
        type: String
    },
    // Is a CPA
    cpaDes: Boolean,
    // Is an Enrolled Agent
    eaDes: Boolean,
    // Is a Tax Attorney
    taxAttDes: Boolean,

    qualification: String,

    //Specify other designation
    designations: {
        type: Array
    },

    officeAddress: {
        type: String,
        required: "please enter office address"
    },

    officeAddress2: {
        type: String
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
    // Years in practice
    year: {
        type: Number,
        min: 4,
        max: 4
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
