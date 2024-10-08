const { default: mongoose } = require("mongoose")
const Buildit = require ("../models/BuildIt")

exports.savescore = async (req, res) => {
    const {id, username} = req.user

    const {score, letter, difficulty} = req.body

    console.log(score, letter, difficulty)

    await Buildit.findOneAndUpdate({owner: new mongoose.Types.ObjectId(id), letter: letter, difficulty: difficulty}, {score: score})
    .catch(async err => {
        console.log(`There's a problem saving write it data. Error ${err}`)

        return res.status(400).json({message: "bad-request", data: "There's a problem saving your score! Please try again later."})
    })

    return res.json({message: "success"})
}

//  #region PARENT

exports.getchildscore = async (req, res) => {
    const {childid, difficulty} = req.query

    const builditdata = await Buildit.find({owner: new mongoose.Types.ObjectId(childid), difficulty: difficulty})
    .then(data => data)
    .catch(async err => {
        console.log(`There's a problem getting write it data. Error ${err}`)

        return res.status(400).json({message: "bad-request", data: "There's a problem getting your child's score! Please try again later."})
    })

    let data = `${difficulty}\n\n`

    writeitdata.forEach(tempdata => {
        const {letter, score} = tempdata

        data += `${letter} : ${score}\n`
    })

    return res.json({message: "success", data: data})
}


//  #endregion