console.log('start require');
var lib = require('./lib.js');
console.log('end require', lib);
//module.exports前打印出的
// {
//   hello: 'world',
//   add: [Function (anonymous)],
//   geek: { hello: 'world' }
// }

//module.exports后打印出lib是  end require [Function: minus]

lib.additional = '这里是外部添加属性';