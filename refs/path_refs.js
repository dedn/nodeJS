const patch = require('path')
console.log(patch.basename(__filename))
console.log(patch.dirname(__filename))
console.log(patch.extname(__filename))

console.log(patch.parse(__filename))
console.log(patch.parse(__filename).base)

console.log(patch.join(__dirname, 'test', 'second.html'))

console.log(patch.resolve(__dirname, 'test', '/second.html'))
console.log(patch.resolve(__dirname, 'test', '/second.html'))
