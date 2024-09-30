const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const studentUsersSchema = new mongoose.Schema(
    {
        parent: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Parentusers",
            index: true
        },
        username: {
            type: String,
            index: true
        },
        password: {
            type: String
        },
        token: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

studentUsersSchema.pre("save", async function (next) {
    if (!this.isModified){
        next();
    }

    this.password = await bcrypt.hashSync(this.password, 10)
})

studentUsersSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

const Studentusers = mongoose.model("Studentusers", studentUsersSchema)
module.exports = Studentusers