const express = require('express')
const patch = require('path')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(patch.join(__dirname, 'views', 'index.html'))
})


app.get('/about', (req, res) => {
    res.sendFile(patch.join(__dirname, 'views', 'about.html'))
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server is running ${PORT}`)
})
