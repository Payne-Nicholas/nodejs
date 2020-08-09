//用户输入行为保存
var playerAction = process.argv[process.argv.length - 1];

const game = require('./lib');

// const result = game(playerAction);
// console.log(result)


//统计获胜次数
let count = 0;
//process.stdin进程的标准输入,启动后程序始终运行并监听状态
// trim()去除字符串首尾空格
process.stdin.on('data', e => {
    const playerAction = e.toString().trim();
    // console.log(playerAction);
    const result = game.test(playerAction);
    //调用module.exports中自定义属性test2
    const result2 = game.test2(playerAction);

    if (result == -1) { //胜负平 分别对应 -1,1,0
        count++;
    }
    if (count === 3) {
        console.log('你牛逼,不TM玩了')
        process.exit(); //杀死进程结束掉程序
    }
})