const cookie = require('cookie');

    //NOTES

// The cookie module is a simple utility for parsing and serializing HTTP cookies. 
// Cookies are small pieces of data stored on the client's computer by the web server and are a way for web applications to maintain state over the HTTP protocol, which is stateless by nature.
// In a web application, cookies are often used to remember users (for example, keeping users logged in), track user behavior (for analytics or advertising purposes), or store user preferences.



const data = {
    name: 'valentine',
    age: 25,
    city: 'San Francisco'
  };
  
// Serialize the data into a JSON string
const dataString = JSON.stringify(data);
  
// Serialize a cookie with options
// The options object can include domain, path, expires, httpOnly, secure, sameSite, etc.
const serializedCookie = cookie.serialize('userData', dataString, {
  domain: '.vkampah.com', // Specifies the domain for which the cookie is valid. An explicitly specified domain must always start with a dot.
  path: '/', // Specifies the path within the domain for which the cookie is valid. If not specified, defaults to the path of the current document.
  httpOnly: true, // Flags the cookie to be accessible only by the web server. This is an important security option to prevent cross-site scripting (XSS) attacks.
  secure: true, // Flags the cookie to be used over secure (https) connections only.
  maxAge: 60 * 60 * 24 // Specifies the number of seconds until the cookie expires. Here, it's set to 1 day (60 seconds * 60 minutes * 24 hours).
});
console.log(serializedCookie); // Outputs: name=valentine; Domain=.example.com; Path=/; HttpOnly; Secure; Max-Age=86400

// Parse a cookie
const parsedCookie = cookie.parse(serializedCookie);
// log the parsed cookie
console.log(parsedCookie); // returns an object with all the options
console.log(parsedCookie.userData);
// parsedCookie.userData is a stringified JSON object, so we need to parse it again
const userData = JSON.parse(parsedCookie.userData)
console.log(userData);
const name = userData['name'];
console.log(`my name is ${name}`);