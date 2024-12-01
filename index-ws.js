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

    db.run(`INSERT INTO visitors (count, time)
        VALUES (${numClients}, datetime('now'))
    `);

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

/* Begin database */
const sqlite = require('sqlite3');
const db = new sqlite.Database(':memory:');

db.serialize(() => {
    db.run(`
        CREATE TABLE visitors (
            count INTEGER,
            time TEXT
        )
    `);
});

function getCounts() {
    db.each("SELECT * FROM visitors", (err, row) => {
        console.log(row);
    });
}

function shutdownDB() {
    getCounts();
    db.close();
}

process.on('SIGINT', () => {
    wss.clients.forEach(function each(client) {
        client.close();
    });

    shutdownDB();
    server.closeAllConnections();
    server.close(() => {
        console.log("Server closed.")
        process.exit(0);
    });
});
