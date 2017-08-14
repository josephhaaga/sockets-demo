const io = require('socket.io')();

let dict = {
    "word": 1,
    "another": 2,
    "third": 3,
    "fourth": 4
}

io.on('connection', (client) => {
  client.on('subscribeToDictionary', (interval) => {
    console.log('client is subscribing to dict with interval ', interval);
    setInterval(() => {
      client.emit('dict', dict);
    }, interval);
  });
});

io.on('postToDictionary', (data) => {
    dict[data] = dict[data]+1;
    console.log("Server.js: post")
    socket.emit('callback', {done: 'Done', data: data});
});

const port = 8000;
io.listen(port);
console.log('listening on port', port);
