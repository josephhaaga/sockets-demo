import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');

function subscribeToDictionary(cb) {
  socket.on('dict', dict => cb(null, dict));
  socket.emit('subscribeToDictionary', 1000);
}

function post(data){
  socket.emit('postToDictionary', data)
}

export { subscribeToDictionary, post };
