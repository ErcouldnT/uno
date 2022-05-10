import { handler } from './client/build/handler.js';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { nanoid } from 'nanoid';
import { PeerServer } from 'peer';

const app = express();
app.enable('trust proxy');

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

const peerServer = PeerServer({
  port: 5000,
  // debug: true,
  path: '/',
  generateClientId: nanoid,
  proxied: true
});

peerServer.on('connection', client => {
  console.log("[+peer] connected: " + client.id);
});

peerServer.on('disconnect', client => {
  console.log("[-peer] disconnected: " + client.id);
});

io.on('connection', socket => {
  console.log("[+socket] connected: " + socket.id);
  socket.on('join-room', (roomID, userID) => {
    console.log("[+socket] " + socket.id + " at " + roomID);

    socket.join(roomID);
    // userID equals to webRTC peer id
    socket.to(roomID).broadcast.emit('user-connected', userID);

    // inside of the room
    socket.on('disconnect', () => {
      console.log("[-socket] " + socket.id + " from " + roomID);
      socket.to(roomID).broadcast.emit('user-disconnected', userID);
    });
  });
  socket.on('disconnect', () => {
    console.log("[-socket] disconnected: " + socket.id);
  });
});

// app.use('/peer', peerServer);
app.use(handler);

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
