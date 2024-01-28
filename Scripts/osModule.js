// import module
const os = require('os');

// Use os.platform() to get the operating system platform
console.log(`Operating System platform: ${os.platform()}`);

// Use os.freemem() to get the amount of free system memory
console.log(`Free memory: ${os.freemem()} bytes`);

// Use os.totalmem() to get the total amount of system memory
console.log(`Total memory: ${os.totalmem()} bytes`);

// Use os.cpus() to get information about each CPU/core
console.log(`CPU Info: ${os.cpus()}`);// this returns bunch of objects
// console.log(`CPU Info: ${JSON.stringify(os.cpus(), null, 2)}`);// parses the objects into json

// Use os.type() to get the operating system name
console.log(`Operating System name: ${os.type()}`);

// Use os.uptime() to get the system uptime in seconds
console.log(`System uptime: ${os.uptime()} seconds`);

// Use os.userInfo() to get information about the current user
console.log(`Current user info: ${JSON.stringify(os.userInfo(), null, 2)}`);

// Use os.hostname() to get the hostname of the operating system
console.log(`Hostname: ${os.hostname()}`);

// Use os.release() to get the operating system release

console.log(`Operating System release: ${os.release()}`);

// tmpdir() to get the path to the temp directory
console.log(`Temp directory path: ${os.tmpdir()}`);

// homedir() to get the path to the home directory
console.log(`Home directory path: ${os.homedir()}`);

// constants object to get the operating system constants
console.log(`Operating System constants: ${JSON.stringify(os.constants, null, 2)}`);

// arch() to get the operating system CPU architecture
console.log(`Operating System CPU architecture: ${os.arch()}`);
