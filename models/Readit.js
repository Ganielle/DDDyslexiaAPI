const mongoose = require("mongoose");

const readItSchema = new mongoose.Schema(
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
        difficulty: {
            type: String,
            index: true
        },
        accuracy: {
            type: Number
        },
        speed: {
            type: Number
        },
        prosody: {
            type: Number
        },
        pitch: {
            type: Number
        },
        intensity: {
            type: Number
        },
        tempo: {
            type: Number
        },
        referenceletter: {
            type: String
        },
        recordfile: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

const Readit = mongoose.model("Readit", readItSchema)
module.exports = Readit