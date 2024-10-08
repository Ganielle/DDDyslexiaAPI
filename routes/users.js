const router = require("express").Router()
const {createstudents, getchildrenlist} = require("../controllers/users")
const {protectplayer, protectadmin, protectguardian} = require("../middleware/middleware")

router
    // .get("/getstudentlist", protectadmin, getstudentlist)
    .get("/getchildrenlist", protectguardian, getchildrenlist)
    .post("/createstudents", protectguardian, createstudents)
    // .post("/deleteuser", protectadmin, deleteuser)

module.exports = router;