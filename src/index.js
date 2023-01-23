const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const router = require('./routes')
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

// router init

router(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
