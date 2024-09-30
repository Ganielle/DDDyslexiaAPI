const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const parentUsersSchema = new mongoose.Schema(
    {
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

parentUsersSchema.pre("save", async function (next) {
    if (!this.isModified){
        next();
    }

    this.password = await bcrypt.hashSync(this.password, 10)
})

parentUsersSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

const Parentusers = mongoose.model("Parentusers", parentUsersSchema)
module.exports = Parentusers