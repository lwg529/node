var http = require('http');
var url = require('url');

function start(route, handle){
    function onRequest(request, response){
        var pathName = url.parse(request.url).pathname;
        console.log('request for ' + pathName + 'received');
        route(handle, pathName, response, request);
    }
    http.createServer(onRequest).listen(8888);
    console.log('server has start');
}
exports.start = start;

