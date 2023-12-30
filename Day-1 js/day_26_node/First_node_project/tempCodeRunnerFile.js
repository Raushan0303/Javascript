const fs = require('fs');
const transformStream = require('stream');

let fileStream = fs.createReadStream(__dirname + "./input.txt");
let outputStream = process.stdout;
