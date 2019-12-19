const socketio = require("socket.io");

module.exports = server => {
    const io = socketio(server);

    io.on("connection", (socket)=> {
        console.log("a user connected");
        socket.on("mensajeria", m => {
            console.log(socket)
            console.log(`NUEVO MENSAJE: ${m}`)
            socket.emit("front", m)
        })
    })
}