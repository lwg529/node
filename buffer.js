// buffer一个专门存放二进制的缓存区

const buffer = Buffer.from('qunar','ascii');

console.log(buffer.toString('hex'));

console.log(buffer.toString('base64'));

const buf1 = Buffer.alloc(10);

const buf2 = Buffer.alloc(10, 1);

const buf4 = Buffer.from([1, 2, 3]);

// 写入缓冲区
 const buf = Buffer.alloc(256);
 len = buf.write('你是最棒的');
 console.log('写入的字节数' + len);

//  从缓冲区读数据
 const buf6 = Buffer.alloc(26);
 for(let i = 0; i < 26; i ++) {
     buf6[i] = i + 97;
 }
console.log(buf6.toString('ascii'));

// buffer转化为JSON
var json = buf.toJSON(buf);
console.log(json);

// 缓冲区合并
var newBuffer = Buffer.concat([buf6, buf]);

console.log('newBuffer的内容是'+ newBuffer.toString());

// 缓冲区比较 buffer1.compare(buffer2)

// 缓冲区拷贝，buf2.copy(buf1,2)  将buf2插入到buf1指定的位置
// 缓冲区裁剪 slice
// 缓冲区的长度 length   buf.length
