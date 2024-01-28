# fs Module

- The fs module in Node.js provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions. 
- fs is used for interacting with the file system. It's used for reading, writing, updating, and deleting files.

* The fs module doesn't have classes, but it does have several methods:

# Methods

- fs.readFile(path[, options], callback): This method is used to asynchronously read the entire contents of a file.
- fs.writeFile(file, data[, options], callback): This method is used to asynchronously write data to a file, replacing the file if it already exists.
- fs.appendFile(path, data[, options], callback): This method is used to asynchronously append data to a file, creating the file if it does not yet exist.
- fs.unlink(path, callback): This method is used to asynchronously remove a file or symbolic link.


