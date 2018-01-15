// path.normalize(p) 规范化路径

// path.join()  链接路径

// path.resolve() 将to解析为绝对路径

var path = require('path');

// 格式化路径
console.log('normalize ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// 连接路径
console.log('join path ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// 转化为绝对路径

console.log('resolve ' + path.resolve('path.js'));

// 路径中文件的后缀名
console.log('ext name' + path.extname('path.js'));