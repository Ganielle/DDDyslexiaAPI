const router = require("express").Router()
const {createparent} = require("../controllers/parentuser")
const {protectplayer, protectadmin, protectguardian} = require("../middleware/middleware")

router
    .post("/createparent", createparent)

module.exports = router;