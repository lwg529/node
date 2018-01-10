var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('连接成功');

    eventEmitter.emit('data_received');
}

eventEmitter.on('data_connect',connectHandler);
eventEmitter.on('data_received',function(){
    console.log('数据接收成功');
})
eventEmitter.emit('data_connect');

console.log('程序执行成功')