// 大多数情况下，我们不会直接使用EventEmitter,而是在对象中继承它， 比如fs，net, http

var events = require('events');
var emitter = new events.EventEmitter();

var listener1 = function(){
    console.log('监听器1在执行');
}

var listener2 = function(){
    console.log('监听器2在执行');
}

// 绑定监听事件
emitter.addListener('connect', listener1);
emitter.on('connect', listener2);
// 计算监听事件的个数
var eventListener = require('events').EventEmitter.listenerCount(emitter, 'connect');

console.log(eventListener + '个事件监听对象');
// 触发事件
emitter.emit('connect');

// 移除一个事件
emitter.removeListener('connect', listener1);
console.log('listener1 不再受监听');

emitter.emit('connect');

eventListener = require('events').EventEmitter.listenerCount(emitter, 'connect');

console.log(eventListener + '个事件监听对象');

console.log('程序执行完毕');

