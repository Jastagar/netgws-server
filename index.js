require("dotenv").config()
const http = require("http")
const app=require("./serverApp");
const io=require("./socketApp");
const {info}=require('./utils/logger');


const server = http.createServer(app);
const PORT = process.env.PORT || 3001
const SOCKETPORT = process.env.SOCKETPORT || 3080


server.listen(PORT,()=>{
    info("Listening server on port:",PORT)
})