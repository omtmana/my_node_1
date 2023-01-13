const fs = require('fs')

// Reading a File
// define char encoding - utf-8
const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textInput)

// Writing a File
const textOut = `This is what we know about the avocado: ${textInput}.\n Created on ${Date.now()}`
// Write it in a new file
fs.writeFileSync('./txt/output.txt', textOut)
console.log('File has been written')