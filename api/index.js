const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.status(200).json({ message: 'This is api' })
})

app.listen(PORT, HOST)
