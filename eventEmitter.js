// 所有异步I/O在事件完成时，都会发送一个事件到事件队列，EventEmitter就是事件触发和事件监听功能的封装。
// on 用于绑定事件，emit用于触发事件
// addListener(event, listener) 为指定事件添加一个监听器到监听器数组的尾部。
// once添加一个单次的监听器，添加后执行一次，触发后解除监听器
// removeListener  移除某个事件的监听器，这个监听器必须是这个事件注册过的
// listeners  返回事件的监听器数组

// var EventEmitter = require('events').EventEmitter;
// var event = new EventEmitter();
// event.on('some_event', function(){
//     console.log('some_event 触发');
// })
// setTimeout(function(){
//     event.emit('some_event');
// },1000);

// 绑定事件在1s后触发

// EventEmitter 的每个事件都有事件名和若干个参数组成，对于每个事件，EventEmitter支持若干个事件监听器

var events = require('events');
var event = new events.EventEmitter();

event.on('some_event',function(arg1, arg2){
    console.log('listener1', arg1, arg2);
});

event.on('some_event', function(arg1, arg2){
    console.log('listener2', arg1, arg2);
});

event.emit('some_event','arg1参数','arg2参数');