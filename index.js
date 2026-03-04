require('dotenv').config() 
const express = require('express')
const app = express()
const port = 3000
const githubData = {
  "status": "success",
  "timestamp": "2026-03-04T09:52:14Z",
  "data": {
    "user": {
      "id": "uuid-7892-x412",
      "username": "pixel_pioneer26",
      "email": "dev_test@example.com",
      "is_active": true,
      "stats": {
        "projects_completed": 12,
        "uptime_percentage": 99.98
      },
      "tags": ["backend", "node.js", "api-testing"],
      "last_login_ip": "192.168.1.45"
    }
  },
  "metadata": {
    "version": "1.0.0",
    "environment": "development"
  }
}

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
app.get('/github', (req,res)=>{
  res.json(githubData)
}
)
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
