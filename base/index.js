// const userObj =require('./user')
//
// console.js('hellov', __dirname)
// console.js('hellov', __filename)
// console.js('user',userObj)
// console.js('user',userObj.hello())
// userObj.hello()

const http = require('http')
const fs = require('fs')
const patch = require('path')

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
     if(req.url ==='/') {
       fs.readFile(
         patch.join(__dirname, 'views', 'index.html'),
           'utf-8',
           (err, content) => {
             if(err) {
                 throw  err
             }

             res.end(content)
           }
       )
     } else if (req.url ==='/about') {
         fs.readFile(
             patch.join(__dirname, 'views', 'about.html'),
             'utf-8',
             (err, content) => {
                 if(err) {
                     throw  err
                 }

                 res.end(content)
             }
         )
     }
     else if (req.url ==='/api/users') {
         res.writeHead(200, {
             'Content-Type': 'text/json'
         })

         const users = [
             {name: 'Yura', age: 31},
             {name: 'Inna', age: 32}
         ]

         res.end(JSON.stringify(users))

         // fs.readFile(
         //     patch.join(__dirname, 'views', 'about.html'),
         //     'utf-8',
         //     (err, content) => {
         //         if(err) {
         //             throw  err
         //         }
         //
         //         res.end(content)
         //     }
         // )
     }

    } else  if (req.method === 'POST') {
        const body = []
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })

        req.on('data', data => {
            body.push(Buffer.from(data))
        })

        req.on('end', () => {
            console.log('body', body)
            const message = body.toString().split('=')[1]
            res.end(`
        <h1> your messages ${message} </h1>
        `)
        })
    }
})

server.listen(3001, () => [
    console.log('server is ranning')
])
