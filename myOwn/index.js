const fs = require('fs')
const http = require('http')
const path = require('path')
const url = require('url')
// Files
// read a file async
// fs.readFile('./txt/starter.txt', 'utf-8', (err, data1) => {
//    fs.readFile(`./txt/${data1}`, 'utf-8', (err, data2) => {
//       console.log(data2)

//       fs.writeFile('./txt/newFile.txt', `New File with Data2: ${data2}`, 'utf-8', err => {
//          console.log('File has been created')
//       })
//    })
// })

// console.log('Will read file')

// SERVER
const server = http.createServer((req, res) => {
   // res.end("Hello from the server")
   const pathName = req.url

   if (pathName == '/' || pathName == '/overview') {
      res.end('This is OVERVIEW')
   } else if (pathName == '/product') {
      res.end('This is PRODUCT')
   } else if (pathName == '/api') {
      //  We need to read the json file
      fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
         const productData = JSON.parse(data)
         res.writeHead(200, {
            'Content-type': 'application/json'
         })
         res.end(data)
      })
   } else {
      res.writeHead(404, {
         'Content-type': 'text/html',
         'my-own-header': 'Hello World'
      })
      res.end('404: Page not Found')
   }

})

server.listen(8000, '127.0.0.1', () => {
   console.log("Server is running on port 8000")
})