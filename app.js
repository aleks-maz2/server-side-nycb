const express = require('express')
const cookieParser = require('cookie-parser')
var cors = require('cors')

const app = express()
const port = process.env.PORT || 3040

const issue2options = {
  origin: true,
  methods: ["GET","POST"],
  credentials: true,
  maxAge: 3600 * 24
};



app.options('*', cors(issue2options)) // include before other routes

app.use(cookieParser({
  maxAge: 1000 * 60 * 15, // would expire after 15 minutes
  httpOnly: false, // The cookie only accessible by the web server
}));

app.get('/', (req,res) => {
  console.log(req.cookies)
  res.send('Its true')
})

app.post('/login', (req, res) => {

  res.cookie('auth', 'fisojenwffjewakj2395235asdwqf', {maxAge: 1000 * 120 * 15,httpOnly: false})
  res.status(200).json({msg: 'Test Server'})
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
