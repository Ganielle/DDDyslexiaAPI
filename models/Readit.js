const mongoose = require("mongoose");

const readItSchema = new mongoose.Schema(
    {
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Studentusers",
            index: true
        },
        letter: {
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

const Readit = mongoose.model("Readit", readItSchema)
module.exports = Readit