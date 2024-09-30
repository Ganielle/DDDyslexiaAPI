const router = require("express").Router()
const {loginstudent, loginparent, loginsuperadmin} = require("../controllers/auth")

router
    .get("/loginstudent", loginstudent)
    .get("/loginparent", loginparent)
    .get("/loginsuperadmin", loginsuperadmin)


module.exports = router;