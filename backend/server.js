
const express = require('express');
const app = express();
const googleAuth = require('./routes/google');
const database = require('./api/database');
// const server = require('http').Server(app)
const cors = require('cors')

app.use(cors())
const server=app.listen(3000, () => console.log('Server listening on port 3000'));
const io = require('socket.io')(server)

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
    
app.use('/auth', googleAuth);
app.use('/api/database', database)
