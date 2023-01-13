// fs module
const fs = require('fs')
// http package/module - building http serve
const http = require('http')
const path = require('path')
// url module
const url = require('url')

// **************** FILES *******************

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

// ***************** SERVER ****************
const server = http.createServer((req, res) => {
   console.log(req.url)
   const path_name = req.url

   if (path_name === '/' || path_name === '/overview') {
      res.end('This is OVERVIEW')
   } else if (path_name === '/product') {
      res.end('This is the PRODUCT')
   } else {
      res.writeHead(404, {
         'Content-type': 'text/html'
      })
      res.end('<h1>Page not found</h1>')
   }
   // console.log(req)
   // res.end('Hello from the server')
})

server.listen(8000, '127.0.0.1', () => {
   console.log('Listen request on port 8000')
})