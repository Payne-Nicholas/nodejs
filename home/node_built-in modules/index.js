const lib = require('./lib');


lib.geekTime.addListener('newLesson', (res) => {
    console.log('yeah!', res);
    if (res.price < 70) {
        console.log('buy', res);
    }
})