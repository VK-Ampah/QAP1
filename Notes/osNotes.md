# os Module

- The os module in Node.js provides operating system-related utility methods and properties. 
- It's useful for getting information about the operating system and hardware, which can be helpful for system monitoring, profiling, or managing computing tasks based on the operating system or other system resources.

* The os module doesn't have classes, but it does have several useful methods and ONE attribute:

# Methods

- os.platform(): Returns a string identifying the operating system platform. For instance, 'darwin', 'win32', 'linux', etc.
- os.freemem(): Returns the amount of free system memory in bytes.
- os.totalmem(): Returns the total amount of system memory in bytes.
- os.cpus(): Returns an array of objects containing information about each CPU/core installed. Each object contains model, speed (in MHz), and times (an object containing the number of milliseconds the CPU/core spent in user, nice, sys, idle, and irq mode).

# Attribute
- os.constants: This is an attribute (not a method) that returns an object containing commonly used operating-system specific constants for error codes, process signals, etc. It's not a function, so you don't call it with parentheses. Instead, you access it like a property of the os object.