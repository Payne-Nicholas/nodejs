interView(function (error) {
    //因为nodejs中 error-first 所以可以写成error不为空时即为失败
    if (error instanceof Error) {
        return console.log('cry');
    } else {
        console.log('smile');
    }
})

// try {
//     interView(function (error) {
//         //因为nodejs中 error-first 所以可以写成error不为空时即为失败
//         if (error) {
//             console.log(error);

//         } else {
//             console.log('smile');
//         }
//     })
// } catch (e) {
//     console.log('cry', e);
// }


//简单的非阻塞I/O异步操作
function interView(callback) {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            callback(null,'success');
        } else {
            callback(new Error('fail')); //正确  因为函数内throw跑出的错误是不能被外部的try catch抓取到的，需要通过callback的形式
            //  throw new Error('fail'); //错误
        }
    }, 500);
}


