const http = require('http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
//   if(req.url === '/produto'){
//     res.end(JSON.stringify({
//         message: 'Produto',
//       }));
//   }
  if(req.url === '/usuario'){
    res.end(JSON.stringify({
        message: 'Usuarios',
      }));
  }
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(4001, console.log("serve rodando na porta 4001"));