import io from "socket.io-client";

const socket = io("http://localhost:4000");

socket.on("connect", () => {
  console.log("[+socket] " + socket.id + " connected.");
});

socket.on("toConsole", (msg) => {
  console.log(msg);
});

export default socket;
