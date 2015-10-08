import useless from './lib/useless.js';
import express from 'express';

const app = express();

app.set('port', (process.env.PORT || 8080));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------

app.get('*', async (req, res) => {
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

export default app;
