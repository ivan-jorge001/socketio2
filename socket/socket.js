function socket(io) {

    io.on('connection',(socket) =>{
        console.log('a user connected');
        socket.on('new message',(msg)=>{

          console.log(`===========msg in socket.js========${msg}`);
            var data = {
                message: msg.message,
                username: msg.username,
                date: Date.now()
            };
            io.emit('chat message',data);
        });
    });
}

module.exports = socket;
