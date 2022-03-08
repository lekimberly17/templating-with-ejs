const express = require('express')
const app = express()
https://runkit.com/const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World, from Express!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
