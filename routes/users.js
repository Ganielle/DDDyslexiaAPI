const router = require("express").Router()
const {createstudents} = require("../controllers/users")
const {protectplayer, protectadmin, protectguardian} = require("../middleware/middleware")

router
    // .get("/getstudentlist", protectadmin, getstudentlist)
    .post("/createstudents", protectguardian, createstudents)
    // .post("/deleteuser", protectadmin, deleteuser)

module.exports = router;