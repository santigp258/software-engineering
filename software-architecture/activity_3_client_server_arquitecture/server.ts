import * as net from 'net';

// Creating a TCP server
const server = net.createServer((socket) => {
    console.log('New client connected.');

    // Welcome message to the client
    socket.write('Welcome to the server\n');

    // Handling data received from the client
    socket.on('data', (data) => {
        console.log(`Client says: ${data.toString()}`);
        socket.write(`Server received: ${data.toString()}\n`);
    });

    // Handling client disconnection
    socket.on('end', () => {
        console.log('Client disconnected.');
    });

    // Handling server errors
    socket.on('error', (err) => {
        console.error('Server error: ', err);
    });
});

// Server listening on port 8080
server.listen(8080, () => {
    console.log('Server listening on port 8080');
});
