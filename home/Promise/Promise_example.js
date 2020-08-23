(() => {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve()
        }, 500)
    })

    console.log(promise);

    setTimeout(() => {
        console.log(promise)
    }, 800);
})()

(() => {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject(new Error());
        }, 500)
    })

    console.log(promise);

    setTimeout(() => {
        console.log(promise)
    }, 800);
})()


(() => {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, 300);
        setTimeout(() => {
            reject(new Error());
        }, 500)
    })

    console.log(promise);

    setTimeout(() => {
        console.log(promise)
    }, 800);
})()

(() => {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            //    resolve('resolve执行结果');
            reject(new Error('reject执行结果'));
        }, 300);
        // setTimeout(() => {
        //     reject(new Error());
        // }, 500)
    }).then((req) => {
        //当前Promise进入resolve状态执行的回调，并且拿到resovle结果
        console.log('resolve', req);
    }).catch((err) => {
        //当前Promise进入resolve状态执行的回调，并且拿到resovle结果
        console.log('reject', err)
    })

    console.log(promise);

    setTimeout(() => {
        console.log(promise)
    }, 800);
})()

(() => {
    let pms = new Promise((succ, err) => {
        setTimeout(() => {
            // succ(2);
            err(new Error(3));
        }, 300);
    }).then((req) => {
        console.log(req)
    }).catch((err) => {
        console.log(err)
    })
})();