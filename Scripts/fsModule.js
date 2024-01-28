const fs = require('fs');
const path = require('path');


// define the path to the file we want to read  
const filePath = path.join(__dirname, '../Notes/fsNote.md');
//verify the path is correct
console.log(filePath);

// Read the data from the file we written above, and logging the contents to the console
// parameters are (filename/path, encoding, callback)
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);

});

// Write data to a new file asynchronously named test.txt
// parameters are (filename/path, data, callback)
const content = 'This is the data to be written to the file';
fs.writeFile('test.txt', content, (err) => {
    if (err) throw err;
    console.log('The file has been wrtiiten to text.txt!');
    });


// Append data to the file
const appendData = 'This is the data to be appended';

fs.appendFile('test.txt', appendData, (err) => {
if (err) throw err;
console.log('The "data to append" was appended to file!');
});

// Delete the file
fs.unlink('test.txt', (err) => {
  if (err) throw err;
  console.log('test.txt was deleted');
});