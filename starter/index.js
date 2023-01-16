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
// This is how you add the file synchonously
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8')
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, 'utf-8')
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8')

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)

// Reading Data from API
const server = http.createServer((req, res) => {
   console.log(req.url)
   const path_name = req.url

   // OVERVIEW PAGE 
   if (path_name === '/' || path_name === '/overview') {
      // load/read template overview
      res.writeHead(200, {'Content-type': 'text/html'})
      res.end(tempOverview)

   // PRODUCT PAGE
   } else if (path_name === '/product') {
      res.end('This is the PRODUCT')

   // API PAGE
   } else if (path_name === '/api') {
      // read file in here
      // we now have access to this data
      res.writeHead(200, {
         'Content-type': 'application/json'
      })
      res.end(data)
      // console.log(productData)

   // NOT FOUND
   } else {
   res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'Hello Word'
   })
   res.end('<h1>Page not found</h1>')
}
   // console.log(req)
   // res.end('Hello from the server')
})

server.listen(8000, '127.0.0.1', () => {
   console.log('Listen request on port 8000')
})