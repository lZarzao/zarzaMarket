require('dotenv').config();

const express = require('express')
const app = express()

require("./config/mongoose.config")
require("./config/debugger.config")
require("./config/local.config")(app)
require("./config/middlewares.config")(app)
require("./config/view-engine.config")(app)
require("./config/session.config")(app)


app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/status", require("./routes/status.routes"))
app.use("/api/product", require("./routes/product.routes"))
app.use("/api/files", require("./routes/files.routes"))

app.use((req, res) => { res.sendFile(__dirname + "/public/index.html")})

module.exports = app;