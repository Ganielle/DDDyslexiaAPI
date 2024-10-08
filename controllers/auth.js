const Studentusers = require("../models/Studentusers")
const Staffusers = require("../models/Staffusers")
const Parentusers = require("../models/Parentusers")
const fs = require('fs')

const bcrypt = require('bcrypt');
const jsonwebtokenPromisified = require('jsonwebtoken-promisified');
const path = require("path");
const privateKey = fs.readFileSync(path.resolve(__dirname, "../keys/private-key.pem"), 'utf-8');
const { default: mongoose } = require("mongoose");

const encrypt = async password => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}


exports.loginstudent = async (req, res) => {
    const {username, password} = req.query

    const studentdata = await Studentusers.findOne({ username: { $regex: new RegExp('^' + username + '$', 'i') } })
    .then(data => data)
    .catch(err => {
        console.log(`There's a problem logging in your account ${username}. Error ${err}`)
        
        return res.status(400).json({message: "bad-request", data: "There's a problem logging in your account. Please contact customer support for more details!"})
    })

    if (!(await studentdata.matchPassword(password))){
        return res.status(400).json({message: "failed", data: "Password incorrect! Please input your valid password and try again."})
    }

    const token = await encrypt(privateKey)

    await Studentusers.findByIdAndUpdate({_id: studentdata._id}, {$set: {token: token}}, { new: true })
    .catch(err => {
        console.log(`There's a problem logging in your account ${username}. Error ${err}`)
        
        return res.status(400).json({message: "bad-request", data: "There's a problem logging in your account. Please contact customer support for more details!"})
    })

    const payload = { id: studentdata._id, username: studentdata.username, token: token, auth: "student" }

    let jwtoken = ""

    try {
        jwtoken = await jsonwebtokenPromisified.sign(payload, privateKey, { algorithm: 'RS256' });
    } catch (error) {
        console.error('Error signing token:', error.message);
        return res.status(500).json({ error: 'Internal Server Error', data: "There's a problem signing in! Please contact customer support for more details! Error 004" });
    }

    return res.json({message: "success", data: {
        token: jwtoken,
        auth: "student",
        id: studentdata._id
    }})
}

exports.loginparent = async (req, res) => {
    const {username, password} = req.query

    const parentdata = await Parentusers.findOne({ username: { $regex: new RegExp('^' + username + '$', 'i') } })
    .then(data => data)
    .catch(err => {
        console.log(`There's a problem logging in your account ${username}. Error ${err}`)
        
        return res.status(400).json({message: "bad-request", data: "There's a problem logging in your account. Please contact customer support for more details!"})
    })

    if (!parentdata){
        return res.status(400).json({message: "failed", data: "No User parent found!"})
    }

    if (!(await parentdata.matchPassword(password))){
        return res.status(400).json({message: "failed", data: "Password incorrect! Please input your valid password and try again."})
    }

    const token = await encrypt(privateKey)

    await Parentusers.findByIdAndUpdate({_id: parentdata._id}, {$set: {token: token}}, { new: true })
    .catch(err => {
        console.log(`There's a problem logging in your account ${username}. Error ${err}`)
        
        return res.status(400).json({message: "bad-request", data: "There's a problem logging in your account. Please contact customer support for more details!"})
    })

    const payload = { id: parentdata._id, username: parentdata.username, token: token, auth: "parent" }

    let jwtoken = ""

    try {
        jwtoken = await jsonwebtokenPromisified.sign(payload, privateKey, { algorithm: 'RS256' });
    } catch (error) {
        console.error('Error signing token:', error.message);
        return res.status(500).json({ error: 'Internal Server Error', data: "There's a problem signing in! Please contact customer support for more details! Error 004" });
    }

    return res.json({message: "success", data: {
        token: jwtoken,
        auth: "parent",
        id: parentdata._id
    }})
}

exports.loginsuperadmin = async (req, res) => {
    const {username, password} = req.query

    const superadmindata = await Parentusers.findOne({ username: { $regex: new RegExp('^' + username + '$', 'i') } })
    .then(data => data)
    .catch(err => {
        console.log(`There's a problem logging in your account ${username}. Error ${err}`)
        
        return res.status(400).json({message: "bad-request", data: "There's a problem logging in your account. Please contact customer support for more details!"})
    })

    if (!(await superadmindata.matchPassword(password))){
        return res.status(400).json({message: "failed", data: "Password incorrect! Please input your valid password and try again."})
    }

    const token = await encrypt(privateKey)

    await Parentusers.findByIdAndUpdate({_id: superadmindata._id}, {$set: {token: token}}, { new: true })
    .catch(err => {
        console.log(`There's a problem logging in your account ${username}. Error ${err}`)
        
        return res.status(400).json({message: "bad-request", data: "There's a problem logging in your account. Please contact customer support for more details!"})
    })

    const payload = { id: superadmindata._id, username: superadmindata.username, token: token, auth: "superadmin" }

    let jwtoken = ""

    try {
        jwtoken = await jsonwebtokenPromisified.sign(payload, privateKey, { algorithm: 'RS256' });
    } catch (error) {
        console.error('Error signing token:', error.message);
        return res.status(500).json({ error: 'Internal Server Error', data: "There's a problem signing in! Please contact customer support for more details! Error 004" });
    }

    return res.json({message: "success", data: {
        token: jwtoken,
        auth: "superadmin"
    }})
}