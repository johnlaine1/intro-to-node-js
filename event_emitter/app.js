var Emitter = require('./emitter');

var myEmitter = new Emitter();

myEmitter.on('userCreated', function() {
	console.log('The userCreated event just fired');
});

myEmitter.on('fileDeleted', function() {
	console.log('The fileDeleted event just fired');
});

myEmitter.emit('userCreated');
myEmitter.emit('fileDeleted');