console.log('hello');
//exports一个默认的变量，可以下挂属性调用  String,function,Object
//外部也可添加模块属性
exports.hello = 'world'

exports.add = function (a, b) {
    return a + b
}

exports.geek = {
    hello: 'world'
}


//验证外部是否添加
// setTimeout(() => {
//     console.log(exports);
// }, 2000);

//修改module.exports会清除掉exports的属性
module.exports = function minus(a, b) {
    return a - b;
}
//外部
setTimeout(() => {
        console.log(exports);
    }, 2000);


   //webpack打包命令 webpack --devtool none --mode development --target node index.js