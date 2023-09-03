require("dotenv").config()
const http = require("http")
const {Server} = require("socket.io")
const app=require("./serverApp");
const {info}=require('./utils/logger');


const server = http.createServer(app);
const PORT = process.env.PORT || 3004

const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000"
    }
})

io.on("connection",(socket)=>{
    socket.emit("CC")
    socket.join("GLOBAL")
    socket.to("GLOBAL").emit("BC",{message:"KI haal ay sareya da"})
    
    socket.on("sendMessage",({message})=>{
        info(message)
        socket.to("GLOBAL").emit("recieved",{message})
    })
})

server.listen(PORT,()=>{
    info("Listening server on port:",PORT)
})