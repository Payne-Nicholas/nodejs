const net = require('net');

const socket = new net.Socket({});

socket.connect({
    host: '127.0.0.1',
    port: 9988
});

socket.write('good morning');

const lessonIds = [
    '136797',
    '136798',
    '136799',
    '136800',
    '136801',
    '136803',
    '136804',
    '136806',
    '136807',
    '136808',
    '136809',
    '141994',
    '143517',
    '143557',
    '143564',
    '143644',
    '146470',
    '146569',
    '146582'
];

const buffer = Buffer.alloc(4);

const index = Math.floor(Math.random() * lessonIds.length);

buffer.writeInt32BE(lessonIds[index]);

socket.write(buffer);

socket.on('data', () => {
    console.log(lessonIds[index], buffer.toString());
});
