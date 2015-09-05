
// reads a file
// prints the number of newlines (\n) it contains to the console
// full path to the file to be read will be provided as the first argument

var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);

var strFile = file.toString();

var lines = strFile.split("\n");

console.log(lines.length-1);

