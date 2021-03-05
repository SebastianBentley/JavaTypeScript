/*
//MODULES
const log = require('./logger');

log('message');

const path = require('path');
var pathObj = path.parse(__filename);

console.log(pathObj)


// OS
const os = require('os');

var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);

// Template string
// ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);


// FILES SYSTEM
const fs = require('fs');

//const files = fs.readdirSync('./');
//console.log(files);

fs.readdir('./', function (err, files) {
    if (err) console.log('Error', err);
    else console.log('Result: ', files);
});



// EVENT EMITTER CLASS WITH (HOMEMADE) LOGGER CLASS
const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();


// Register a listener
logger.on('messageLogged', (event) => {
    console.log('Listener called', event);
})

logger.log('message');


// EXERCISE
//emitter.on('logging', (event) => {
//    console.log(`Message data: ${event.data}`);
//})

// Raise: logging (data: message)
//emitter.emit('logging', {data: 'message'})
*/

// HTTP MODULE
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});


server.listen(3000);

console.log('Listening on port 3000...');






