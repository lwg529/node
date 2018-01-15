// fs的方法都有同步和异步的，比如fs.readFile()  和同步的fs.readFileSync()

// 异步方法最后一个参数是回调函数，回调函数第一个参数包含了错误信息(error)

var fs = require('fs');

// 异步读取
fs.readFile('test.txt', function(err, data){
    if(err){
        console.error(err);
    }
    console.log('异步读取' + data.toString());
});

// 同步读取

var data = fs.readFileSync('test.txt');
console.log('同步读取' + data.toString());

console.log('程序执行完毕');

// fs.open()异步模式下打开文件的  fs.open(path, flags, model, callback)

// 异步打开文件

fs.open('test.txt', 'r+', function(err, fd){
    if(err){
        return console.error(err);
    }
    console.log('文件打开成功');
});

// 获取文件信息，fs.stat()
fs.stat('test.txt', function(err, stats){
    console.log(stats.isFile());
})

// 读取一个文件

fs.stat('test.txt', function(err, stats){
    if(err){
        return console.error(err);
    }
    console.log(stats);
    console.log('文件读取成功');
    console.log('是否为文件(isFile)' + stats.isFile());
    console.log('是否为目录(isDirectory)' + stats.isDirectory());
})

// 写入文件 writeFile()
console.log('准备写入文件');
fs.writeFile('input.txt', '我是通过写入增加的内容', function(err){
    if(err){
        return console.error(err);
    }
    console.log('数据写入成功');
    console.log('读取写入的内容');
    fs.readFile('input.txt', function(err, data){
        if(err){
            return console.log(err);
        }
        console.log('异步读取的数据' + data.toString());
    });
});

// 读取文件 fs.read()   关闭文件 fs.close()  删除文件 fs.unlink()
fs.unlink('input.txt', function(err){
    if(err){
        return console.error(err);
    }
    console.log('文件删除成功');
});

// fs.mkdir 创建目录
console.log('创建目录 /tmp/test');
fs.mkdir('/tmp/test', function(err){
    if(err){
        return console.error(err);
    }
    console.log('目录创建成功');
});

// 读取目录
console.log('查看tmp目录');

fs.readdir('/tmp', function(err, files){
    if(err){
        return console.error(err);
    }
    files.forEach(function(file){
        console.log(file);
    });
});

// rmdir 删除目录
console.log('准备删除目录 /temp/test');
fs.rmdir('/tmp/test', function(err){
    if(err){
        return console.error(err);
    }
    console.log('读取temp目录');
    fs.readdir('/tmp', function(err, files){
        if(err){
            return console.error(err);
        }
        files.forEach(function(file){
            console.log(file);
        });
    });
});
