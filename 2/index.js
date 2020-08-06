//console.log(process);
let playerActive = process.argv[process.argv.length - 1];
const game = require('./lib.js')

// let count = 0;
// process.stdin.on('data', e => {
//     const playerActive = e.toString().trim();
//     const result = game(playerActive);
//     console.log(result);
//     if (result == -1) {
//         count++;
//     }
//     if (count === 3) {
//         console.log('不玩了');
//         process.exit();
//     }
// })
console.log(game.add(5,2))