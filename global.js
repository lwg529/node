// _filename  当前执行脚本的文件名
console.log( __filename );

// _dirname  当前脚本所在的目录

console.log('_dirname' + __dirname);

// setTimeout: 指定的毫秒数后执行函数，只执行一次

// process是一个全局对象

process.on('exit', function(code){
    setTimeout(function(){
        console.log('该代码永远不会被执行')
    }, 0);
    console.log('退出码为：', code);
});
console.log('程序执行完毕');

// stdout  标准输出流

process.stdout.write("Hello World!" + "\n");

console.log('当前目录: ' + process.cwd());