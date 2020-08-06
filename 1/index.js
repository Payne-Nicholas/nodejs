//拿到输入内容
var playerActive = process.argv[process.argv.length - 1];

console.log(process.argv);
console.log(process.stdin.on)

var random = Math.random() * 3;
console.log(random);

//电脑随机行为
var computerActive = '';
if (random < 1) {
    computerActive = '石头';
} else if (random > 2) {
    computerActive = '剪刀';
} else {
    computerActive = '布';
}

//判断逻辑
if (
    computerActive === '石头' && playerActive === '布' ||
    computerActive === '剪刀' && playerActive === '石头' ||
    computerActive === '布' && playerActive === '剪刀'
) {
    console.log('你赢了');
} else if (computerActive === playerActive) {
    console.log('平局');
} else {
    console.log('你输了');
}