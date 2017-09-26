const http = require('http');

const port = 3000;
let server = http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  resObj = {"ipaddress" : req.connection.remoteAddress, "language" : req.headers['accept-language'], "software" : req.headers['user-agent']};
  //res.end(req.headers['x-forwarded-for'] + req.headers['accept-language'] + req.headers['user-agent']);
  res.end(JSON.stringify(resObj));
});
server.listen(process.env.Port || port);
console.log("listening on port " + port);

