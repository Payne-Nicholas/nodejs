//引入可以是require('./lib') 或 require('./lib.js');
const lib = require('./lib');

lib.asyncTest((err, resp) => {
    //因为nodejs中 error-first 所以可以写成error不为空时即为失败
    if (err instanceof Error) {
        return console.log('cry');
    } else {
        console.log('smile');
    }
});