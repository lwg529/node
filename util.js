// util 是node.js的核心模块，用于提供常用函数的集合

// util.inherits 实现对象间原型继承的函数

// var util = require('util');

// function Base(){
//     this.name = 'base';
//     this.base = 1991;
//     this.sayHello = function(){
//         console.log('Hello' + this.name);
//     };
// }

// Base.prototype.showName = function (){
//     console.log(this.name);
// };

// function Sub(){
//     this.name = 'sub';
// }
// // 只继承原型上的方法，构造函数的方法不会被继承
// util.inherits(Sub, Base);
// var objBase = new Base();
// objBase.showName();
// objBase.sayHello();
// console.log(objBase);

// var objSub =  new Sub();
// objSub.showName();
// // objSub.sayHello();   sub继承了base原型中定义的属性，而构造函数内的base属性和sayHello没有被sub继承
// console.log(objSub);

// util.inspect()  将任意一个对象
// showHidden是一个可选参数，设置为true，将输出更多的隐藏的信息
// depth表示最大的递归数，不设置默认2
var util = require('util');
function Person(){
    this.name = 'test';
    this.toString = function () {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

// util.isArray(obj)  是一个数组，返回true，否则返回false
console.log(util.isArray([]));
console.log(util.isArray({}));
// util.isRegExp()  是一个正则表达式，返回true，否则返回false
console.log(util.isRegExp(/some regexp/));

// util.isDate()  是一个日期，返回true，否则返回false
// util.isError 是一个错误对象返回true，否则返回false