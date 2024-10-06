const routers = app => {
    console.log("Routers are all available");

    app.use("/auth", require("./auth"))
    app.use("/parent", require("./parentuser"))
    app.use("/children", require("./users"))
    app.use("/readit", require("./readit"))
    // app.use("/dashboard", require("./dashboard"))
    // app.use("/uploads", require('./upload'))
}

module.exports = routers