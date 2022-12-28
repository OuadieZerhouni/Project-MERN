const express = require('express')
const app = express()
const http = require('http')
const {Server} = require('socket.io')

const cors = require('cors')
app.use(cors())

const server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin :"http://localhost:3001",
        METHODS : ["GET","POST"],
    },
})


 
 io.on("connection",socket=>{
//   socket.on("join-room",(roomId,userId)=>{
//          socket.join(roomId);
//        socket.to(roomId).emit("user-connected",userId);
//     });
    console.log('inside')
    socket.on("vi",(data)=>{
        console.log(data.msg)
    })
    //console.log("hi socket")
});
module.exports = app;