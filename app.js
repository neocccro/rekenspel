const express = require("express");
const app = express();
const server = require("http").createServer(app);

var sockets = [];

const io = require("socket.io")(server);

app.use(express.static(__dirname + "/public"))

app.get("/",(req,res)=>{
  res.sendFile(__dirname + "/public/index.html");
})

io.on("connection",(socket)=>{
  sockets.push(socket);
  console.log("egh");
  socket.on("client",(data)=>{
    console.log(data);
    sockets.forEach((i)=>{
      i.emit("server",data);
    })
  })
})

server.listen(3000);
