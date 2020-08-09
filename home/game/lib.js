/* 
 **  程序逻辑
 */
module.exports = function (playerAction) {
    //小于3的随机程序
    var random = Math.random() * 3;
    //电脑的操作
    if (random < 1) {
        var computerAction = '石头'
    } else if (random > 2) {
        var computerAction = '剪刀'
    } else {
        var computerAction = '布'
    }
    //胜负判定
    if (computerAction == playerAction) {
        console.log('平局');
        return 0;
    } else if (
        (computerAction === '石头' && playerAction === '布') ||
        (computerAction === '剪刀' && playerAction === '石头') ||
        (computerAction === '布' && playerAction === '剪刀')
    ) {
        console.log('你赢了');
        return 1;
    } else {
        console.log('你输了');
        return -1
    }
}