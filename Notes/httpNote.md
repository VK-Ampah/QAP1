# http Module:

http module contain classes, methods and attributes used to create HTTP servers and clients and handle requests and responses. It's essential for building web servers and RESTful APIs.


* Common Methods 
- createServer(requestListener): Creates an HTTP server instance.
- listen(port, [hostname], [backlog], [callback]): Binds the server to a specific port and IP address.
- http.createServer([options][, requestListener]): This method returns a new instance of http.Server. The requestListener is a function which is automatically added to the 'request' event.
- http.request(options[, callback]): This method is used to make an HTTP request to a server. The options argument can be an object, a string, or a URL object. If options is a string, it is automatically parsed with new URL().
- http.get(options[, callback]): This method is similar to http.request(), but it sets the method to GET and automatically calls req.end().

# Common Classes:
These classes provide the building blocks for creating HTTP servers and clients in Node.js.

# http.Server: 
This class is used to create a new HTTP server.

- Event: 'request': This event is emitted each time there is a request. Note that there may be multiple requests per connection (in the case of HTTP Keep-Alive connections).
- Event: 'connection': When a new TCP stream is established. Socket object is created by the server and passed to the event listener.
- server.listen(port[, hostname][, backlog][, callback]): Starts the HTTP server listening for connections.

# http.ServerResponse: 
This object is created internally by an HTTP server, not by the user. It is passed as the second parameter to the 'request' event.  Represents the response that an HTTP server sends back to a client.

- response.write(chunk[, encoding][, callback]): This method sends a chunk of the response body.
- response.end([data][, encoding][, callback]): This method signals to the server that all of the response headers and body have been sent.


# http.IncomingMessage: 
An IncomingMessage object is created by http.Server or http.ClientRequest and passed as the first argument to the 'request' and 'response' events, respectively.

- message.headers: The headers of the incoming message.
- message.method: The request method as a string. Only valid for request obtained from http.Server.
- message.url: Request URL string. Only valid for request obtained from http.Server.

# http.ClientRequest: 
This object is created internally and returned from http.request(). It represents an in-progress request whose header has already been queued.

- request.write(chunk[, encoding][, callback]): This method writes a chunk of data to the request body.
- request.end([data][, encoding][, callback]): This method finishes sending the request.

# http.Agent: 
An Agent is responsible for managing connection persistence and reuse for HTTP clients. It maintains a queue of pending requests for a given host and port, reusing a single socket connection for each until the queue is empty.

- new Agent([options]): Creates a new Agent object.
- agent.maxSockets: By default set to Infinity. Determines how many concurrent sockets the agent can have open per origin.
- agent.requests: An object which shows the queued requests that have not yet been assigned to sockets.





