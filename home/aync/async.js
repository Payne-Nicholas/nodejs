/* 异步流程控制 */
//npm :async.js
//thunk
//避免过多层的callback嵌套陷入回调地狱


//事件循环
const eventLoop = {
    queue: [],
    timeoutQueue: [],
    fsqueue: [],
    loop() {
        while (this.queue.length) {
            //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
            let callback = this.queue.shift();
            callback();
        }
        this.fsqueue.forEach(callback => {
            if(done){
                callback();
            }
        })
        setTimeout(this.loop.bind(this), 50);
    },
    add(callback) {
        this.queue.push(callback);
    }
}
eventLoop.loop();
setTimeout(() => {
    eventLoop.add(function () {
        console.log(1);
    });
}, 500);
setTimeout(() => {
    eventLoop.add(function () {
        console.log(2);
    });
}, 800);