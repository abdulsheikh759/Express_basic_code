require('dotenv').config()
// module 
const express = require('express')
//express all command in app mai hai
const app = express()
//ye port number hai
const port = 3000

// router
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1> mai hu ak login page </h1>')
  })

  app.get('/about', (req, res) => {
    res.send('<h1> mai hu ak about  page  </h1>')
  })

  app.get('/contact', (req, res) => {
    res.send('<h1> mai hu ak contact page </h1>')
  })


  // port listen
app.listen(port, () => {
  // console.log(process.env);
  console.log(`Example app listening on port ${port}  ${process.env}`)
})
