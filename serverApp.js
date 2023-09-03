const express = require("express")
const cors = require("cors");
const homeRouter=require("./routes/homeRoutes");
const app = express()

// MiddleWares
app.use(cors())


// Routes
app.use("/",homeRouter)


// exports
module.exports = app