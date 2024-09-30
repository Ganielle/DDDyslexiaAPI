const mongoose = require("mongoose");

const writeItSchema = new mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Studentusers",
            index: true
        },
        number: {
            type: String,
            index: true
        },
        score: {
            type: Number
        },
        difficulty: {
            type: String,
            index: true
        }
    },
    {
        timestamps: true
    }
)

const Writeit = mongoose.model("Writeit", writeItSchema)
module.exports = Writeit