var http = require('http');
var url = require('url');
var util = require('util');

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
//     var params = url.parse(req.url, true).query;
//     res.write('网站名 '+ params.name);
//     res.write('url '+ params.url);
//     res.end();
// }).listen(3000);

// post的请求都在请求体中，node.js默认是不会解析请求体的，需要的时候自己手动解析
var querystring = require('querystring');

// http.createServer(function(req, res){
//     var post = '';
//     req.on('data', function(chunk){
//         data += chunk;
//     });
//     req.on('end', function(){
//         post = querystring.parse(post);
//         res.end(util.inspect(post));
//     });
// }).listen(3000);

// 表单通过post输出数据
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
http.createServer(function(req, res){
    var body = '';
    req.on('data', function(chunk){
        body += chunk;
    });
    
    req.on('end', function(){
        console.log(body);
        body = querystring.parse(body);
        console.log(body);
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
        if(body.name && body.url){
            res.write('网站名 ' + body.name);
            res.write('<br />');
            res.write('url ' + body.url);
        } else {
            res.write(postHTML);
        }
        res.end();
    });
}).listen(3000);
