const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('myEvent', () => {
   console.log('My event just happened');
});

myEmitter.emit('myEvent');