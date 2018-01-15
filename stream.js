// 对http发起请求的request就是一个stream流
// 读入流
// var fs = require('fs');
// var data = '';

// // 创建可读流
// var readStream = fs.createReadStream('test.txt');

// readStream.setEncoding('utf8');

// readStream.on('data', function(chunk){
//     data += chunk;
// });

// readStream.on('end', function(){
//     console.log(data);
// });

// readStream.on('error', function(err){
//     console.log(err.stack);
// });

// console.log('程序执行完毕');

// 写入流
// var fs = require('fs');
// var data = '这是一个测试文件，内容是通过写入生成的';
// var writeStream = fs.createWriteStream('output.txt');

// writeStream.write(data, 'utf8');
// writeStream.end();

// writeStream.on('finish',function(){
//     console.log('写入完成');
// });

// writeStream.on('error', function(err){
//     console.log(err.stack);
// });

// console.log('程序执行完毕');

// 管道流
// var fs = require('fs');

// var readStream = fs.createReadStream('test.txt');

// var writeStream = fs.createWriteStream('testOut.txt');

// readStream.pipe(writeStream);

// console.log('程序执行完毕');

// 链式流

// var fs = require('fs');
// var zlib = require('zlib');

// fs.createReadStream('test.txt')
// .pipe(zlib.createGzip())
// .pipe(fs.createWriteStream('input.txt.gz'));

// console.log('文件压缩完成');

// 解压缩
var fs = require('fs');

var zlib = require('zlib');

fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('gz.txt'));

console.log('文件解压缩完成');