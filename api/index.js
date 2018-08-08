const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const HOST = process.env.HOST

const lazadaRoute = require('./routes/lazada')

app.get('/', (req, res) => {
	res.status(200).json({ message: 'This is api.' })
})

app.use('/lazada', lazadaRoute)

app.all('*', (req, res) => {
	res.status(404).json({ message: 'Not found anything.' })
})

app.listen(PORT, HOST)
