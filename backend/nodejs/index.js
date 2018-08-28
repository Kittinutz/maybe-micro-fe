const express = require('express')
const app = express()
const BASE_PATH = process.env.BASE_PATH || '/api'
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST

const routes = require('./routes')

app.use('/', routes)
app.use(BASE_PATH, routes)
app.all('*', (req, res) => {
	res.status(404).json({ message: 'Not found' })
})
app.listen(PORT, HOST)
