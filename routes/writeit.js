const router = require("express").Router()
const { savescore, getchildscore } = require("../controllers/writeit")
const {protectplayer, protectadmin, protectguardian} = require("../middleware/middleware")

router
    .get("/getchildscore", protectguardian, getchildscore)
    .post("/savescore", protectplayer, savescore)

module.exports = router;