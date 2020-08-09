import Websocket from 'isomorphic-ws';

const ws = new Websocket('ws://localhost:3030/ws');

ws.onopen = function () {
  console.log('Connection opened');
  ws.send('something');
};

ws.onmessage = function incoming(data) {
  console.log('Message received', data);
};

export async function sendMessage(message) {
  ws.send(message);
}
