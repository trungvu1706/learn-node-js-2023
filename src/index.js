const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
// http morgan
// app.use(morgan('combined'))
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.use(express.json())

// handle-bar
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resource/views'))

app.get('/', (req, res) => {
  res.render('home')
})
app.get('/news', (req, res) => {
  res.render('news')
})
app.get('/search', (req, res) => {
  res.render('search')
})
app.post('/search', (req, res) => {
  console.log('rq-body', req.body)
  res.send('')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
