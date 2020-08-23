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


(async function () {
    try {
        // await interView(1);
        // await interView(2);
        // await interView(3);
        //使用promise.all
        await Promise.all([
            interView[1],
            interView[2],
            interView[3]
        ])
    } catch (e) {
        return console.log('cry at ' + e.round);
    }



    console.log('smile');
})()