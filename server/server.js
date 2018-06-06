const express = require('express')
const app = express()

const path = require('path')
const publicPath = path.join(__dirname, '..', 'public')

// Per express, se deployato su heroku usa la porta dinamica, se in dev usa la 3000
const port = process.env.PORT || 3000

app.use(express.static(publicPath))
app.get('*', (res, req) => {
  res.sendFile(path.join(publicPath, 'index.html'))
})
app.listen(port, () => {
  console.log('Server is up')
})
