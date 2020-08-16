//把目录声明成一个npm包，npm init,安装glob，npm install glob
//引入require('glob');
//glob可以把目录下的文件和文件名，递归的获取到

const glob = require('glob');

let result = null;

/* 常规的调用 方式阻塞式I/O */

//console.time()和console.timeEnd()可以打印出这一个语句的耗时是多少
// console.time('glob');
// result = glob.sync(__dirname + '/**/*'); //   '/**/*'为通配符
// console.timeEnd('glob');//耗时为10ms到20ms
//console.log(result);


/* 非阻塞I/O的调用方式 */
console.time('glob')
glob(__dirname + '/**/*', function (err, res) {
    result = res;
    // console.log(result);
    console.log('got result');
})
console.timeEnd('glob');//耗时仅为2ms-5ms
console.log(1 + 1);