require('source-map-support').install();

import app from './app';
import { Server } from 'http';

const server = new Server(app);

//
// Launch the server
// -----------------------------------------------------------------------------

server.listen(app.get('port'), () => {
  if (process.send) {
    process.send('online');
  }
  else {
    console.log('The server is running at http://localhost:' + app.get('port'));
  }
});
