
const express = require('express')
const server = express()
const port = 3000

server.get('/ejemplo', (req, res) => {
  res.send('Hello World!')
})

server.get('/alumno', (req, res) => {
    res.send('Estoy en la ruta de ejemplo')
  })

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log(1+1)
console.log(4*5)

