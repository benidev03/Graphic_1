const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening: http://localhost:${port}/public`)
})

const path = require('path')
app.use('/public', express.static(path.join(__dirname, 'public')))
