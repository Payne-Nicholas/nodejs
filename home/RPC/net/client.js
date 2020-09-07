/* client相当于实际项目中的node做的bff层，server相当于java、php等后端，这里只是把server在node中实现 */
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

let id = Math.floor(Math.random() * lessonIds.length);

socket.on('data', (buffer) => {
    const seqBuffer = buffer.slice(0, 2);
    const titleBuffer = buffer.slice(2);
    id = Math.floor(Math.random() * lessonIds.length);
    console.log(seqBuffer.readInt16BE(), titleBuffer.toString());
    socket.write(encode(id));
});
let seq = 0;
const encode = (index) => {
    buffer = Buffer.alloc(6);
    buffer.writeInt16BE(seq);
    buffer.writeInt32BE(lessonIds[index], 2);
    console.log(seq, lessonIds[index]);
    seq++;
    return buffer;
};

for (let k = 0; k < 100; k++) {
    id = Math.floor(Math.random() * lessonIds.length);
    socket.write(encode(id));
}
