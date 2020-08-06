var playerActiveIpt = process.argv[process.argv.length - 1];
var playerActive = Number;
for (var i = 0; i < playerActiveIpt; i++) {
    playerActive = Math.floor(Math.random() * 6 + 1);
}
console.log('玩家点数：' + playerActive);
var computerActive = Math.floor(Math.random() * 6 + 1);
//console.log(computerActive);
console.log('电脑点数：' + computerActive);
if (playerActive > computerActive) {
    console.log('玩家胜');
} else if (playerActive < computerActive) {
    console.log('电脑胜');
} else if (playerActive === computerActive) {
    console.log('平局');
} else {
    console.log('玩家把筛子摇碎了');
}