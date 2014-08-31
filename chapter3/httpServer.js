/**
 * Created by happy on 2014/8/31.
 */
var http = require('http');
var server = new http.Server();
server.on('connection', function (socket) {
    console.log("Client arrived: " + new Date());
    socket.on("end", function () {
        console.log("Client Left: " + new Date());
    });
});
server.on("request", function (request, response) {
    request.setEncoding("utf8");
    request.on("readable", function () {
        console.log(request.read())
    });
});
server.setTimeout(2000, function (socket) {
    socket.write("Too Slow!", "utf8");
    socket.end();
});
server.listen(8080);
