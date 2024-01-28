// import the `http` module
const http = require('http');

// Use the `createServer` method to create a new HTTP server instance (server class).
// The `requestListener` function handles incoming requests and sends responses.
const server = http.createServer((req, res) => {
  // The `req` object is an instance of `IncomingMessage` object.
  // It represents the incoming HTTP request and has properties like `req.url` and `req.method` `req.headers`.

  // The `res` object is an instance of `ServerResponse`.
  // It's used to send back the HTTP response. and has methods like res.write() and res.end(), res.setHeader().

  // Set the HTTP status code and headers
  // set content type to html to display html in browser
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const body = "<html>" + "<body>" + "<h1> Yeah Buddy</h1>" + "<p> This is a simple test of the http module</p>"+ "</body>" + "</html>";
  // Send the HTTP response body and end the response
  res.end(body);
});

// Use the `listen` method of the `Server` class to start the server listening for connections.
// The `listen` method takes a port number, hostname(or IP), and callback function.
server.listen(3000, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:3000/');
});