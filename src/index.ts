import { Server, Socket } from "socket.io";

const server = new Server({cors: {origin: 'http://localhost:4200'}})

server.on('connection', (socket)=>{

    console.log('Connected to the server!')

    socket.on('message', (data)=>{
        console.log(`Received message: ${data}`)
        server.emit('messages', {data, message: 'Message Received!'})
    })

})

server.listen(4000)