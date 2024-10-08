const mongoose = require("mongoose");

const buildItSchema = new mongoose.Schema(
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

const Buildit = mongoose.model("Buildit", buildItSchema)
module.exports = Buildit