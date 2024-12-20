const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('started Now');
    
})

eventEmitter.emit('start')