import * as net from 'net';
import * as readline from 'readline';

// Setting up readline to read user input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Connecting to the server at localhost:8080
const client = net.createConnection({ port: 8080 }, () => {
    console.log('Connected to the server.');

    // Reading user input and sending it to the server
    rl.on('line', (input) => {
        client.write(input);
    });
});

// Handling server responses
client.on('data', (data) => {
    console.log(`Server response: ${data.toString()}`);
});

// Handling client disconnection
client.on('end', () => {
    console.log('Disconnected from the server.');
});

// Handling client errors
client.on('error', (err) => {
    console.error('Client error: ', err);
});
