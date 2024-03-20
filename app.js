
const http = require('http');

const server = http.createServer();

server.on('connection',(Socket)=>{
    console.log('My name is Folayinka Olaofe!')
});

server.listen(8900);
