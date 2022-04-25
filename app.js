const express = require('express')
const app = express()
const router = require('./router.js')

app.set('views', 'views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static('public'))
app.use('/', router)


app.listen(4003)