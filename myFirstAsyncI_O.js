
// uses a single async file system to read a file and
// print out the number of newlines it contains

var fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
	lineArray = data.toString().split('\n');
	lines = lineArray.length-1;
	console.log(lines);
})

