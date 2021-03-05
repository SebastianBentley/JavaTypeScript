const os = require('./OSInfo')
console.log(os)

const DOSDetector = require('./dosDetector');

const dosDetector = new DOSDetector(2000);

dosDetector.on('DoSDetected', (e) => console.log(e))

dosDetector.addUrl('www.dos.dk');

setTimeout(() => dosDetector.addUrl('www.dos.dk'), 1000)

