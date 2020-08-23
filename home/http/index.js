//一个简单的http服务
const http = require('http');
const fs = require('fs'); //引入fs模块

http
    .createServer((request, response) => {
        if (request.url == '/favicon.ico') {
            response.writeHead(200);
            response.end();
            return;
        }
        response.writeHead(200);
        fs.createReadStream(__dirname + '/index.html')
            .pipe(response)
    })
    .listen(3000) //监听端口


    