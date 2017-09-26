const http = require('http');

//const port = process.argv[2] || 3000;
const port = 3000;
let server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  resObj = {"ipaddress" : req.connection.remoteAddress, "language" : req.headers['accept-language'], "software" : req.headers['user-agent']};
  res.end(JSON.stringify(resObj));
});
server.listen(process.env.PORT || port);
console.log("listening on port " + port);