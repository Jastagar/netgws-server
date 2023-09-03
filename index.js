require("dotenv").config()
const http = require("http")
const app=require("./serverApp");
const server = http.createServer(app);
const PORT = process.env.PORT || 3001


server.listen(PORT,()=>{
    console.log("Listening server on port:",PORT)
})