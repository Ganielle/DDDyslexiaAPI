const Studentusers = require("../models/Studentusers")
const Studentuserdetails = require("../models/Studentuserdetails")
const Readit = require("../models/Readit")
const Writeit = require("../models/Writeit")
const Buildit = require ("../models/BuildIt")
const { default: mongoose } = require("mongoose")

exports.createstudents = async (req, res) => {
    const {id, username} = req.user

    const {parentid, studentusername, password, firstname, lastname} = req.body
    
    if (!parentid || !studentusername || !password || !firstname || !lastname){
        return res.status(400).json({message: "failed", data: "Please complete the form first and try again"})
    }

    const userlogin = await Studentusers.findOne({ username: { $regex: new RegExp('^' + studentusername + '$', 'i') } })
    .then(data => data)
    .catch(err => {
        console.log(`There's a problem getting existing users. Error: ${err}`)

        return res.status(400).json({message: "bad-request", data: "There's a problem creating user loggin! Please try again later."})
    })

    if (userlogin){
        return res.status(400).json({message: "failed", data: "There's an existing username! Please use other username."})
    }

    const userdeets = await Studentuserdetails.findOne({ firstname: { $regex: new RegExp('^' + firstname + '$', 'i') }, lastname: { $regex: new RegExp('^' + lastname + '$', 'i') } })
    .then(data => data)
    .catch(err => {
        console.log(`There's a problem getting existing users details. Error: ${err}`)

        return res.status(400).json({message: "bad-request", data: "There's a problem creating user loggin! Please try again later."})
    })

    if (userdeets){
        return res.status(400).json({message: "failed", data: "There's an existing student!."})
    }

    const userlogindeets = await Studentusers.create({parent: new mongoose.Types.ObjectId(parentid), username: studentusername, password: password})
    .then(data => data)
    .catch(err => {
        console.log(`There's a problem creating user loggin. Error ${err}`)

        return res.status(400).json({message: "bad-request", data: "There's a problem creating user loggin! Please try again later."})
    })

    await Studentuserdetails.create({owner: new mongoose.Types.ObjectId(userlogindeets._id), firstname: firstname, lastname: lastname})
    .catch(async err => {
        console.log(`There's a problem creating user details. Error ${err}`)

        await Studentusers.findOneAndDelete({username: studentusername})

        return res.status(400).json({message: "bad-request", data: "There's a problem creating user loggin! Please try again later."})
    })

    const readItBulkWrite = [
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "A",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "a",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "B",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "b",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "C",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "c",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "D",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "d",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "E",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "e",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "F",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "f",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "G",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "g",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "H",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "h",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "I",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "i",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "J",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "j",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "K",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "k",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "L",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "l",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "M",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "m",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "N",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "n",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "O",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "o",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "P",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "p",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "Q",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "q",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "R",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "r",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "S",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "s",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "T",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "t",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "U",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "u",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "V",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "v",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "W",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "w",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "X",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "x",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "Y",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "y",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "Z",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "z",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        },
    ]

    const writeItBulkWrite = [
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "A",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "B",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "C",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "D",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "E",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "F",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "G",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "H",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "I",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "J",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "K",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "L",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "M",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "N",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "O",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "P",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "Q",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "R",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "S",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "T",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "U",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "V",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "W",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "X",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "Y",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "Z",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
    ]

    const buildItBulkWrite = [
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "A",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "B",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "C",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "D",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "E",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "F",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "G",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "H",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "I",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "J",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "K",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "L",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "M",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "N",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "O",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "P",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "Q",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "R",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "S",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "T",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "U",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "V",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "W",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "X",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "Y",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
        {
            insertOne: {
                document: {
                    owner: new mongoose.Types.ObjectId(userlogindeets._id),
                    letter: "Z",
                    score: "0",
                    difficulty: "Easy",
                }
            }
        }, 
    ]

    await Readit.bulkWrite(readItBulkWrite)
    await Writeit.bulkWrite(writeItBulkWrite)
    await Buildit.bulkWrite(buildItBulkWrite)

    return res.json({message: "success"})
}

exports.getchildrenlist = async (req, res) => {
    const {id, username} = req.user

    const childrens = await Studentusers.aggregate([
        // Match the student users by the provided parent ID
        {
          $match: {
            parent: new mongoose.Types.ObjectId(id)
          }
        },
        // Lookup the studentUserDetails associated with each student user
        {
          $lookup: {
            from: "studentuserdetails", // Collection name for StudentUserDetails
            localField: "_id", // Field in StudentUsers that connects to StudentUserDetails
            foreignField: "owner", // Field in StudentUserDetails that references StudentUsers
            as: "studentDetails" // Output field for the joined data
          }
        },
        // Unwind the studentDetails array (flatten the result)
        {
          $unwind: "$studentDetails"
        },
        // Project only the fields you need (firstname and lastname from studentDetails)
        {
          $project: {
            _id: 1, // Exclude the _id field from the output
            "studentDetails.firstname": 1, // Include firstname from studentDetails
            "studentDetails.lastname": 1  // Include lastname from studentDetails
          }
        }
    ])
    .catch(async err => {
        console.log(`There's a problem getting children data. Error ${err}`)

        return res.status(400).json({message: "bad-request", data: "There's a problem  getting children data! Please try again later."})
    })

    const data = childrens.map(child => ({
        id: child._id,
        fullname: child.studentDetails.firstname + " " + child.studentDetails.lastname,
    }));

    return res.json({message: "success", data: data})
}

// exports.getstudentlist = async (req, res) => {
//     const { id, username } = req.user;
//     const { fullname, page, limit } = req.query;

//     const pageOptions = {   
//         page: parseInt(page) || 0,
//         limit: parseInt(limit) || 10
//     };

//     let query = {};

//     if (fullname) {
//         // Split fullname into parts
//         const nameParts = fullname.trim().split(' ');
//         const lastname = nameParts.pop(); // Assume last part is the last name
//         const firstname = nameParts.join(' '); // Join the rest as first name
    
//         query = {
//             $or: [
//                 { firstname: new RegExp(fullname, 'i') }, // Match full name as first name
//                 { lastname: new RegExp(fullname, 'i') }, // Match full name as last name
//                 { firstname: new RegExp(firstname, 'i'), lastname: new RegExp(lastname, 'i') } // Match split parts
//             ]
//         };
//     }

//     const users = await Userdetails.find(query)
//     .skip(pageOptions.page * pageOptions.limit)
//     .limit(pageOptions.limit)
//     .sort({ 'createdAt': -1 })
//     .then(data => data)
//     .catch(err => {
//         console.log(`There's a problem getting users. Error ${err}`);
//         return res.status(400).json({ message: "bad-request", data: "There's a problem with the server. Please contact support for more details." });
//     });

//     if (users.length <= 0) {
//         return res.json({ message: "success", data: {
//             list: [],
//             totalpages: 0
//         }});
//     }

//     const totalpages = await Userdetails.countDocuments(query)
//     .then(data => data)
//     .catch(err => {
//         console.log(`There's a problem getting users. Error ${err}`);
//         return res.status(400).json({ message: "bad-request", data: "There's a problem with the server. Please contact support for more details." });
//     });

    
//     const pages = Math.ceil(totalpages / pageOptions.limit)

//     const data = {
//         list: [],
//         totalpages: pages
//     };

//     users.forEach(tempdata => {
//         const { owner, firstname, lastname } = tempdata;

//         data.list.push({
//             userid: owner,
//             firstname: firstname,
//             lastname: lastname
//         });
//     });

//     return res.json({ message: "success", data: data });

// }

// exports.deleteuser = async (req, res) => {
//     const {userid} = req.body

//     await Users.deleteOne({_id: new mongoose.Types.ObjectId(userid)})

//     await Userdetails.deleteOne({owner: new mongoose.Types.ObjectId(userid)})

//     await Storyassessment.deleteMany({owner: new mongoose.Types.ObjectId(userid)})

//     return res.json({message: "success"})
// }