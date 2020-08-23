//将前面章节的面试改成Promise异步，三轮面试
(() => {
    let promise = interView(1)
        .then(() => {
            return interView(2)
        })
        .then(() => {
            return interView(3)
        })
        .then(() => {
            console.log('smile');
        })
        .catch((err) => {
            console.log('crr at' + err.round + ' round')
        })



    function interView(round) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve('success');
                } else {
                    let error = new Error('fail');
                    error.round = round;
                    reject(error);
                }
            }, 500);
        })
    }
})()


//多轮并发的改造。同同时面试两个公司
(() => {
    /* 
     ** Promise.all()方法用于将多个 Promise 实例，
     ** 包装成一个新的 Promise 实例
     ** Promise.all()方法接受一个数组作为参数
     ** const p = Promise.all([p1, p2, p3]);
     ** Promise.all()方法的参数可以不是数组，但必须具有 Iterator 接口，
     ** 且返回的每个成员都是 Promise 实例
     */
    Promise
        .all([
            interView('geekBang'),
            interView('Tencent')
        ])
        .then(() => {
            //当两个都返回状态为resolve时触发.then();
            console.log('smile')
        })
        .catch((err) => {
            console.log('cry for ' + err.name);
        })


    function interView(name) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve('success');
                } else {
                    let error = new Error('fail');
                    error.name = name;
                    reject(error);
                }
            }, 500);
        })

    }
})()