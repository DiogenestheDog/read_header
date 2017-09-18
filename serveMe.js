const http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  console.log(req.headers['accept-language']);
  console.log(req.headers['user-agent']);
  console.log(req.connection.remoteAddress);
  resObj = {"ipaddress" : req.connection.remoteAddress, "language" : req.headers['accept-language'], "software" : req.headers['user-agent']};
  //res.end(req.headers['x-forwarded-for'] + req.headers['accept-language'] + req.headers['user-agent']);
  res.end(JSON.stringify(resObj));
});
server.listen(8000);