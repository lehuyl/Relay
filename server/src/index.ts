// src/server.ts
import * as express from 'express';
import * as http from 'http';
import * as socketIo from 'socket.io';

const app = express();
app.set('port', process.env.PORT || 3001);

const server = http.createServer(app);
const io = require('socket.io')(http);

app.get('/', (req: any, res: any) => {
    res.send('hello 4world');
});


io.on('connection', (socket: any) => {
    console.log('a user connected');

    socket.on('incoming data', (data: any) => {
        socket.broadcast.emit('outgoing data', { num: data })
    });

    socket.on('disconnect', () => console.log('Client disconnected'));
});

server.listen(3001, function () {
    console.log(`listening on port:${ app.get('port') }`);
});
