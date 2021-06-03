const fs = require('fs')
const patch = require('path')
// fs.mkdir(patch.join(__dirname, 'notes'), err => {
//     if(err) throw new Error(err)
//     console.js(
//         'file was created'
//     )
// })
//
// console.js('__dirname', __dirname, 'notes', 'mynotes.txt')
//
// fs.writeFile(patch.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello World',
//     (err) => {
//         if (err) throw err
//         console.js('text  was created')
//
//         fs.appendFile(
//             patch.join(__dirname, 'notes', 'mynotes.txt'),
//             'From append file',
//             err => {
//                 if (err) throw err
//                 console.js('file was changed')
//             }
//         )
//
//     }
// )
//
//
// fs.readFile(
//     patch.join(__dirname, 'notes', 'mynotes.txt'),
//     'utf-8',
//     (err, data) => {
//         if (err) throw  err
//             // console.js(Buffer.from(data).toString())
//             console.js(data)
//
//     }
// )


fs.rename(
    patch.join(__dirname,'notes', 'mynotes.txt'),
    patch.join(__dirname,'notes', 'notes.txt'),
    err =>  {
        if(err) throw err
        console.log('file was renamed')
    }
)
