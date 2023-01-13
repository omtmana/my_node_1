// fs module
const fs = require('fs')
// http package/module - building http serve
const http = require('http')

// // Reading a File
// // define char encoding - utf-8
// const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textInput)

// // Writing a File
// const textOut = `This is what we know about the avocado: ${textInput}.\n Created on ${Date.now()}`
// // Write it in a new file
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log('File has been written')

// Non-blocking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//       console.log(data2)
//       fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//          console.log(data3)
//       })
//    })
//    // step depending upon the steps of previous
// });
// console.log('Will read file')