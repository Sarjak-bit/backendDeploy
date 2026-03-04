require('dotenv').config() 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('sarjakdotcom')
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>Coffee aur Code</h2>")
})
app.get('/facebook',(req,res)=>{
    res.send("<h2>Coffee aur Maths</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
