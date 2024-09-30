const mongoose = require("mongoose");

const studentUserDetailsSchema = new mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Studentusers",
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

const Studentuserdetails = mongoose.model("Studentuserdetails", studentUserDetailsSchema)
module.exports = Studentuserdetails