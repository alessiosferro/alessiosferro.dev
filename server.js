const express = require('express');
const path = require('path');

const server = express();
const PORT = 3000;

server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(PORT, () => {
	console.log(`Server in esecuzione su http://localhost:${PORT}`);
});