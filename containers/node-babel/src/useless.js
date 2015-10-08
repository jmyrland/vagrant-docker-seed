import util from 'util';

export default {
  generateMessage: (url, name = 'world!') => {
    return new Promise((resolve) => {

      if (url === '/') {
        const message = util.format('Hello, %s!', name);
        resolve(message);
      }

      // Unknown url
      throw Error('Unknown url.');
    });
  },
};
