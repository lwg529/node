var fs=require('fs');

// 同步读取文件
// var data = fs.readFileSync('./test.txt');

// console.log(data.toString());
// console.log('程序执行结束');

// 异步读取文件

fs.readFile('test.txt',function(err, data){
    if(err) return console.error(err);
    console.log(data.toString());
})

console.log('程序执行结束');