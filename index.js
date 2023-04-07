const express = require('express')
const app = express()

app.post('/signup', (req, res) => {
  res.send('Hello World!')
})
app.get('/submissions', (req, res) => {
  res.send('Hello World!')
})
app.post('/login', (req, res) => {
  res.send('Hello World!')
})
app.get('/questions', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
