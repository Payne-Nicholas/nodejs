const result = async () => {
    let content = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 500)
    });
    console.log(content);
}


setTimeout(() => {
    console.log(result)
}, 800)


(() => {
    const result = async function () {
        try {
            let content = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(new Error('8'));
                }, 500)
            });
        } catch (e) {
            console.log('error', e.message);
        }
        console.log(content);
        return 4
    }()


    setTimeout(() => {
        console.log(result);
    }, 800)
})()