const mongoose = require("mongoose");

const parentUserDetailsSchema = new mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Parentusers",
            index: true
        },
        firstname: {
            type: String
        },
        lastname: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Parentuserdetails = mongoose.model("Parentuserdetails", parentUserDetailsSchema)
module.exports = Parentuserdetails