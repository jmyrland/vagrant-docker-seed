// import http from 'http';
import useless from './useless.js';

import express from 'express';
import { Server } from 'http';

const server = express();
const http = new Server(server);

server.set('port', (process.env.PORT || 8080));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

server.get('*', async (req, res) => {
  console.log('Incoming request: ', req.url);

  try {
    const message = await useless.generateMessage(req.url, 'from Vagrant + Docker!');

    console.log('Sending message: ', message);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(message);
  }
  catch(err) {
    console.log(err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(err.message);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------

http.listen(server.get('port'), () => {
  if (process.send) {
    process.send('online');
  }
  else {
    console.log('The server is running at http://localhost:' + server.get('port'));
  }
});
