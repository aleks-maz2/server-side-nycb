const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
const port = process.env.PORT || 3040

app.use(cookieParser({
  maxAge: 1000 * 60 * 15, // would expire after 15 minutes
  httpOnly: false, // The cookie only accessible by the web server
}));

app.get('/login', (req, res) => {

  res.cookie('auth', 'fisojenwffjewakj2395235asdwqf', {maxAge: 1000 * 120 * 15,httpOnly: false})
  res.status(200).json({msg: 'Test Server'})
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
