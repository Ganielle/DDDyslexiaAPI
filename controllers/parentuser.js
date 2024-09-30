const Parentusers = require("../models/Parentusers")
const Parentuserdetails = require("../models/Parentuserdetails")
const { default: mongoose } = require("mongoose")

exports.createparent = async (req, res) => {
    const {username, password, firstname, lastname} = req.body

    if (!username || !password || !firstname || !lastname){
        return res.status(400).json({message: "failed", data: "Please complete the form first and try again"})
    }

    const userlogin = await Parentusers.findOne({ username: { $regex: new RegExp('^' + username + '$', 'i') } })
    .then(data => data)
    .catch(err => {
        console.log(`There's a problem getting existing users. Error: ${err}`)

        return res.status(400).json({message: "bad-request", data: "There's a problem creating user loggin! Please try again later."})
    })

    if (userlogin){
        return res.status(400).json({message: "failed", data: "There's an existing username! Please use other username."})
    }

    const userdeets = await Parentuserdetails.findOne({ firstname: { $regex: new RegExp('^' + firstname + '$', 'i') }, lastname: { $regex: new RegExp('^' + lastname + '$', 'i') } })
    .then(data => data)
    .catch(err => {
        console.log(`There's a problem getting existing users details. Error: ${err}`)

        return res.status(400).json({message: "bad-request", data: "There's a problem creating user loggin! Please try again later."})
    })

    if (userdeets){
        return res.status(400).json({message: "failed", data: "There's an existing student!."})
    }

    const userlogindeets = await Parentusers.create({username: username, password: password})
    .then(data => data)
    .catch(err => {
        console.log(`There's a problem creating user loggin. Error ${err}`)

        return res.status(400).json({message: "bad-request", data: "There's a problem creating user loggin! Please try again later."})
    })

    await Parentuserdetails.create({owner: new mongoose.Types.ObjectId(userlogindeets._id), firstname: firstname, lastname: lastname})
    .catch(async err => {
        console.log(`There's a problem creating user details. Error ${err}`)

        await Parentusers.findOneAndDelete({username: username})

        return res.status(400).json({message: "bad-request", data: "There's a problem creating user loggin! Please try again later."})
    })

    return res.json({message: "success"})
}