const express = require('express');
const server = require('http').createServer();
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: __dirname
    });
});

server.on('request', app);

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

/* Begin websocket */
const ws = require('ws');
const wss = new ws.WebSocketServer({ server });

wss.on('connection', function connection(ws) {
    const numClients = wss.clients.size;
    console.log(`Clients connected: ${numClients}`);
    wss.broadcast(`Current visitors: ${numClients}`);

    if(ws.readyState === ws.OPEN) {
        ws.send('Welcome to my server!');
    }

    ws.on('close', function close() {
       console.log(`A client has disconnected.`);
       wss.broadcast(`A client has disconnected.`);
    });
});

wss.broadcast = function(data) {
    wss.clients.forEach(function each(client) {
       client.send(data);
    });
}


