const EventEmitter = require('events').EventEmitter;

class GeekTime extends EventEmitter {
    //constructor为默认继承 super函数是为子类中获得父类的this
    constructor() {
        super();
        setInterval(() => {
            this.emit('newLesson', {
                price: Math.random() * 100
            });
        }, 2000);
    }
}

const geekTime = new GeekTime;

//geetTime的实例保存在module.exports对象中
module.exports = {
    'geekTime':geekTime
};