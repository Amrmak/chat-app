const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 3030;

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let users = ["Public"];

let publicMessages = [];

app.get("/users", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    users
  });
});

io.engine.generateId = req => {
  return req._query.id;
};

io.on("connection", socket => {
  users.push(socket.id);
  console.log(`${socket.id} Connected`);

  io.sockets.emit("online users", users);
  io.sockets.emit("messages", publicMessages);

  socket.on("public message", msg => {
    publicMessages.push(msg);
    console.log(msg);
    io.emit("public message", publicMessages);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} Disconnected`);
    let index = users.indexOf(socket.id);
    users.splice(index, 1);
    socket.broadcast.emit("user disconnected", socket.id);
  });
});

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});